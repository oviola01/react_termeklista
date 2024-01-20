export default class ProductModel{
    #list=[];

    constructor(){
        this.#list=[
            {
                title:"stuff1",
                bin:"C0123",
                price:999,
                pic:"elérési út"
            },
            {
                title:"stuff2",
                bin:"D0324",
                price:1999,
                pic:"elérési út"
            },
            {
                title:"stuff3",
                bin:"C1081",
                price:999,
                pic:"elérési út"
            }
        ];
    }

    getList(){
        return this.#list;
    }
}