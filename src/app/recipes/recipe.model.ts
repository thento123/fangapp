//its a class object which helps us to define the structure of our recipe data that we will access 

export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;

    //the constructor will help us access this object from other files
    constructor(name:string, desc:string, imagePath:string){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
    }
}