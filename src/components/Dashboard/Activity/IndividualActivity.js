import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import UserContext from '../../../contexts/UserContext';
import useSaveActivity from '../../../hooks/api/useSaveActivity';
import useUserActivities from '../../../hooks/api/useActivity';
import useActivityInscriptions from '../../../hooks/api/useActivityInscriptions';

export default function IndividualActivity({ activity }) {
  const { saveActivity } = useSaveActivity();
  const { getUserActivities } = useUserActivities();
  const { userActivitiesData, setUserActivitiesData } = useContext(UserContext);
  const [activitiesId, setActivitiesId] = useState([]);
  const { InscriptionsActivity } = useActivityInscriptions(activity.id);
  
  useEffect(() => {
    if (userActivitiesData) {
      const arrayActivitiesId = userActivitiesData.map((activity) => {
        return activity.activityTypeId;
      });
      setActivitiesId(arrayActivitiesId);
    }
  }, [userActivitiesData]);

  function calculateDuration() {
    const start = activity.schedules.split('-')[0];
    const end = activity.schedules.split('-')[1];

    const startHour = start.split(':')[0];
    const startMinute = start.split(':')[1];

    const endHour = end.split(':')[0];
    const endMinute = end.split(':')[1];

    const duration = 60 * (Number(endHour) - Number(startHour)) + (Number(endMinute) - Number(startMinute));

    return (duration / 60) * 80;
  }

  async function bookActivity(activityTypeId) {
    try {
      await saveActivity({ activityTypeId });
      const userActivities = await getUserActivities();
      setUserActivitiesData(userActivities);
      toast('Informações salvas com sucesso!');
    } catch (error) {
      if (error.response.data.message) {
        toast('Inscrição não efetuada, você já possui uma atividade que conflita com este horário!');
      } else {
        toast('Não foi possível salvar suas informações!');
      }
    }
  }
  
  if (InscriptionsActivity) {
    const isActivityFull = activity.capacity - InscriptionsActivity.amount === 0;
    const isUserRegistered = activitiesId.includes(activity.id);
    return (
      <ActivityInformation activityHeight={calculateDuration()} registered={isUserRegistered}>
        <div>
          <h2>{activity.name}</h2>
          <p>{activity.schedules}</p>
        </div>
        <Vacancy onClick={isActivityFull ? null : () => bookActivity(activity.id)} style={{ fontSize: '30px', color: isActivityFull ? 'red' : '#078632' }} registered={isUserRegistered}>
          {isUserRegistered ? 'Inscrito' : (isActivityFull ? 'Esgotado' : 'Inscrever-se')}
        </Vacancy>
      </ActivityInformation>
    );
  } else {
    return <></>;
  }
}

const ActivityInformation = styled.div`
  background-color: ${(props) => (props.registered ? '#D0FFDB' : '#f1f1f1')};
  width: 265px;
  height: ${(props) => `${props.activityHeight}px`};
  display: flex;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  div:nth-child(2) {
    width: 1px;
    height: ${(props) => `${props.activityHeight - 20}px`};
    background-color: #cfcfcf;
    margin-left: 20px;
    margin-right: 16px;
  }

  div {
    width: 100%;
  }

  h2 {
    font-size: 12px;
    color: #343434;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    width: 75px;
    font-size: 12px;
    color: #343434;
  }
`;
const Vacancy = styled.button`
  background-color: ${(props) => (props.registered ? '#D0FFDB' : '#f1f1f1')};
  border: none;
  border-left: 1px solid #cfcfcf;
  cursor: pointer;
  margin-left: 5px;
  font-size: 19px;
  p {
    font-size: 9px;
  }
`;
