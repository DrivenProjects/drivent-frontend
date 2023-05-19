import styled from 'styled-components';
import ActivitiesList from './ActivitiesList';

export default function ChooseActivies({
  activityType,
  filterActivity,
  setFilterActivity,
  isSelectedDay,
  setselectedDay,
}) {
  if (!activityType) {
    return 'Carregando...';
  }
  
  // return (
  //   <ChooseActivies
  //     activityType={activityType}
  //     filterActivity={filterActivity}
  //     setFilterActivity={setFilterActivity}
  //     isSelectedDay={isSelectedDay}
  //     setselectedDay={setselectedDay}
  //   />
  // );

  let activitiesByDate = [];
  let activitiesInfo = [];
  activityType.map((item) => {
    if (!activitiesByDate.includes(item.activityDate)) {
      activitiesByDate.push(item.activityDate);
      activitiesInfo.push(item);
    }
  });

  function chooseDay(data, index) {
    setFilterActivity(data);
    setselectedDay(index);
  }

  return (
    <>
      <ActivitiesContainer>
        <h1>Escolha de atividades</h1>
        <p>Primeiro, filtre pelo dia do evento:</p>
        <div>
          {activitiesInfo.map((item) => {
            return (
              <Button
                key={item.id}
                isSelected={item.id === isSelectedDay}
                onClick={() => chooseDay(item.activityDate, item.id)}
              >
                {item.activityDate}
              </Button>
            );
          })}
        </div>
        <ActivitiesList filterActivity={filterActivity} activityType={activityType} />
      </ActivitiesContainer>
    </>
  );
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131px;
  height: 37px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  margin-right: 24px;
  background-color: ${(props) => (props.isSelected ? '#ffd370' : '#e0e0e0')};
  font-size: 14px;
  cursor: pointer;
`;

const ActivitiesContainer = styled.div`
  & > div {
    display: flex;
  }
  & > h1 {
    font-size: 34px;
    color: #000000;
    margin-bottom: 36px;
  }
  & > p {
    font-size: 20px;
    color: #8e8e8e;
    margin-bottom: 18px;
  }
`;
