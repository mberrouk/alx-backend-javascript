namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }

    export class React extends Subjects.Subject {
        getRequirements = () : string => 'Here is the list of requirements for React';
        getAvailableTeacher = () : string => {
            if (!this.teacher?.experienceTeachingReact)
                return 'No available teacher';
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}