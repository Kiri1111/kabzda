import {Rating, RatingValueType} from "./Rating";
import {useState} from "react";

export default {
    title: 'Rating stories',
    component: Rating
}


export const EmptyStars = () => <Rating value={0} onClick={() => {
}}/>
export const Stars1 = () => <Rating value={1} onClick={() => {
}}/>
export const Stars2 = () => <Rating value={2} onClick={() => {
}}/>
export const Stars3 = () => <Rating value={3} onClick={() => {
}}/>
export const Stars4 = () => <Rating value={4} onClick={() => {
}}/>
export const Stars5 = () => <Rating value={5} onClick={() => {
}}/>

export const ChangeRating = () => {

    const [value, setValue] = useState<RatingValueType>(0)

    return <Rating value={value} onClick={(value) => {
        setValue(value)
    }}/>
}
