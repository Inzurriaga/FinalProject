export class MountainClass {

    id: number;
    classType: string;
    description: string;


    constructor(id?: number, classType?: string, description?: string) {
        this.id = id;
        this.classType = classType;
        this.description = description;
    }
}
