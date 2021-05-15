import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from 'typeorm'
import {v4 as uuid} from 'uuid';

import { CourseUnit } from './CouserUnit';


class Activy {

    constructor(){
        if(! this.id){
             this.id = uuid()
        }
    }
    
    readonly id: string

    @ManyToOne(()=> CourseUnit, course_init => course_init.activies)
    course_unit: CourseUnit

} 

export {Activy}