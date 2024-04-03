/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"forms"})

export class Form {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'date'})
    recievedate:Date;

    @Column({type:'text'})
    recieveByName:string;
    
    @Column({type:'text'})
    designation:string;

    @Column({type:'text'})
    feedbackChannel:string;

    @Column({type:'boolean'})
    NameAgeNIDInfoShare:boolean;

    @Column({type:'text'})
    desIssuesSupport:string;

    @Column({type:'text'})
    typeIssues:[string];

    @Column({type:'text'})
    incidence:[string];
    
    @Column({type:'text'})
    categoryOfFeedback :[string];

    @Column({type:'boolean'})
    fIRP:boolean;

    @Column({type:'boolean'})
    fIRD:boolean;

    @Column({type:'text'})
    indiThemeticeTA :[string];

    @Column({type:'text'})
    categoryOfComplaint :[string];

    @Column({type:'text'})
    status :[string];

    @Column({type:'text'})
    instantResponse :string;
    
    @Column({type:'boolean'})
    anyDisability:boolean;
 
    @Column({type:'text'})
    remark :string;
}
