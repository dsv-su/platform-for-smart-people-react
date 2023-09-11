import  { useState } from 'react'
import {Container} from 'react-bootstrap'
import ModalAddActivity from 'components/ModalAddActivity'
import {useNavigate} from 'react-router-dom'
import Activity, {activities,empty} from 'components/Activity'

function Activities() {
	const [description, setDescription] = useState('description');
console.log()

	const navigate = useNavigate();
	return (
		<Container className={"my-5 d-flex flex-column gap-5"}>
			<div className={"d-flex flex-column align-items-center col-lg-10 mx-auto"}>
				<div className={"d-flex flex-row flex-wrap gap-4 p-0 w-100 m-auto justify-content-evenly"}>
					{activities.map(activity => (
						<div key={activity.name} onClick={() => navigate('../activityprofile', { state: activity })} style={{cursor: "pointer"}}>
							<Activity  activity={activity} size={100} showName={true} roundedCircle={true}/>
						</div>
					))}
				</div>
			</div>
			<ModalAddActivity activityP={empty}/>
		</Container>
	);
}

export default Activities;
