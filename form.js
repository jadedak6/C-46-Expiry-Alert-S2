class Form{
constructor(){
//Array to store the details
this.productdetails = [];

//Deatils for the product
this.nameproduct = createInput("Name of the product");
this.expirymonth = createInput("Expiry month");
this.expiryyear = createInput("Expiry year");
this.button = createButton("Add product");
}

display(){
    //Positions of inputs and button
    this.nameproduct.position(100,150);
    this.expirymonth.position(300,150);
    this.expiryyear.position(520,150);
    this.button.position(100,180);

    //Mouse pressed function for the button
    this.button.mousePressed(()=>{
    //Variables for each input    
     y=y+20;

    var productname = this.nameproduct.value();
    var month = this.expirymonth.value();
    var year = this.expiryyear.value();  

    var details = [productname, month, year];
    this.productdetails.push(details);
    })
}
}