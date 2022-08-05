import { SetStateAction } from "react"
import { ActivityItem } from "../../../../../types/ActivityItem"

interface Props {
    activityItem: ActivityItem,
    setActivitiesList: React.Dispatch<SetStateAction<ActivityItem[]>>
    event: React.MouseEvent<HTMLButtonElement>
}

function handleComplete({activityItem,setActivitiesList,event}: Props) {
    event.preventDefault()
    setActivitiesList(prevActitivies => 
        prevActitivies.map(activity => 
        {
            if (activityItem.id === activity.id){
                return {...activity, status: "completed"}
            }
            return activity
        }))
}

export default handleComplete