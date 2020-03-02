export class MountainClass {

    id: number;
    classType: string;
    description: string;


    constructor(id: number = 1, classType?: string, description?: string) {
        this.id = id;
        this.classType = classType;
        this.description = description;
    }
}
