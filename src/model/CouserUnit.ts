import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from 'typeorm'
import { v4 as uuid} from 'uuid';
import { Activy } from './Activy';

class CourseUnit {

    
    @OneToMany (() => Activy, activy => activy.course_unit)
    activies: Activy[]

}

export {CourseUnit}