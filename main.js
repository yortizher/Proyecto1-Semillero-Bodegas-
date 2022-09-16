var app = new Vue({
  el: "#app",
  data: {
    numeroFactura: 1,
    nombreUsuario: "",
    estrato: [
      { estrato: 1, cargoFijo: 2300, valorMt3: 250 },
      { estrato: 2, cargoFijo: 3200, valorMt3: 350 },
      { estrato: 3, cargoFijo: 3900, valorMt3: 460 },
    ],
    seleccionEstrato: 0,
    m3Consumido: 0,
    cargoFijo: 0,
    subsidio: 0,
    promedio1:0,
    promedioMetros1:0,
    m3ConsumidoEstrato1:0,
    totalFacturado1:0,
    promedio2:0,
    promedioMetros2:0,
    totalFacturado2:0,
    m3ConsumidoEstrato2:0,
    promedio3:0,
    promedioMetros3:0,
    totalFacturado3:0,
    m3ConsumidoEstrato3:0,
    totalFactura: 0,
    total:0,
    usuarios: [],
    index: "",
    
  },
  methods: {
    getIndex(evt) {
      this.index = evt.target.selectedIndex;
    },
    borarEmpleados(index) {
      this.usuarios.splice(index, 1);
    },
    agregarUsuarios() {
      this.subsidioEstratos();
      
      this.usuarios.push({
        numeroFactura: this.numeroFactura++,
        nombreUsuario: this.nombreUsuario,
        estrato: this.seleccionEstrato,
        metrosConsumidos: this.m3Consumido,
        cargoFijo: this.cargoFijo,
        metrosConsumidos: this.m3Consumido,
        subsidio: this.subsidio,
        totalFactura: this.totalFactura,
        concepto1:"",
        concepto2:"",
        concepto3:"",
      });

      this.verDatos()
      
    },
    verDatos(){
      this.concepto1=`Nombre de usuario:  ${this.nombreUsuario}`;
      this.concepto2=`Estrato:  ${this.seleccionEstrato}`;
      this.concepto3=`Subsidio aplicado:  ${this.subsidio}`;
      this.concepto4=`Total factura:  ${this.totalFactura}`;
    },

    subsidioEstratos(){
      if(this.seleccionEstrato == "1"){
          this.subsidio = 0.40 * this.estrato[0].cargoFijo ;
          this.cargoFijo =  this.estrato[0].cargoFijo
          this.totalFactura= this.cargoFijo + (this.m3Consumido * this.estrato[0].valorMt3) - this.subsidio
          this.promedio1 +=1
          this.m3ConsumidoEstrato1  += this.m3Consumido 
          this.promedioMetros1 = this.m3ConsumidoEstrato1 / this.promedio1
          this.totalFacturado1 += this.totalFactura
          this.total+=this.totalFactura
          
      }else if (this.seleccionEstrato == "2"){
          this.subsidio = 0.30 * this.estrato[1].cargoFijo;
          this.cargoFijo =  this.estrato[1].cargoFijo
          this.totalFactura = this.cargoFijo + (this.m3Consumido * this.estrato[1].valorMt3) - this.subsidio
          this.promedio2 +=1
          this.m3ConsumidoEstrato2  += this.m3Consumido 
          this.promedioMetros2 = this.m3ConsumidoEstrato2 / this.promedio2
          this.totalFacturado2 += this.totalFactura
          this.total+=this.totalFactura

      }else if(this.seleccionEstrato == "3"){
          this.subsidio = 0.10 * this.estrato[2].cargoFijo;
          this.cargoFijo =  this.estrato[2].cargoFijo
          this.totalFactura= this.cargoFijo + (this.m3Consumido * this.estrato[2].valorMt3) - this.subsidio
          this.promedio3 +=1
          this.m3ConsumidoEstrato3  += this.m3Consumido 
          this.promedioMetros3 = this.m3ConsumidoEstrato3 / this.promedio3
          this.totalFacturado3 += this.totalFactura
          this.total+=this.totalFactura
      }
    },
    
   
    
  },
});