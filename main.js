var app = new Vue({
    el: '#app',
    data: {
      
        libra:2.2046,
        gramo:1000,
        cantidad:0,
       bodega1:100000,
       bodega2:230000,
       bodegauno:100000,
       bodegados:230000,
       seleccionCargo:"",
       tipo1:["kilos","Libra","Gramos"],
       conversionKAL:0,
       conversionKAG:0,
       totalVentas1:0,
       totalVentas2:0,
       isActive:false,
       isActive2:false,
       porcent50:0,
       porcent10:0,
       porcent502:0,
       porcent102:0,
  
    },
    methods: {
      totalTotalVendido1(){
        this.totalVentas1-=this.bodega1
      },
      totalTotalVendido2(){
        this.totalVentas2-=this.bodega2
      },
  
      convertirKAL(){
        this.conversionKAL=this.cantidad/this.libra;
        
      },
      convertirKAG(){
        this.conversionKAG=this.cantidad/this.gramo;
      },
      porcentaje50(){
        this.porcent50=this.bodegauno*0.5;
      },
      porcentaje10(){
        this.porcent10=this.bodegauno*0.1;
      },
      porcentaje50dos(){
        this.porcent502=this.bodegados*0.5;
      },
      porcentaje10dos(){
        this.porcent102=this.bodegados*0.1;
      },
  
  
      vender1(){
        if(this.seleccionCargo=="Libra"){
          this.convertirKAL();
          if(this.conversionKAL>this.bodega1){
            alert("!La cantidad ingresada excede el inventario¡")
            this.conversionKAL=0;
          }else{
            this.bodega1-=this.conversionKAL;
            this.totalVentas1+=this.conversionKAL;
          }
        }else if(this.seleccionCargo=="Gramos"){
          this.convertirKAG();
          if(this.conversionKAG>this.bodega1){
            alert("!La cantidad ingresada excede el inventario¡")
            this.conversionKAG=0;
          }else{
            this.bodega1-=this.conversionKAG;
            this.totalVentas1+=this.conversionKAG;
          }
        }else{
          if(this.cantidad>this.bodega1){
            alert("!La cantidad ingresada excede el inventario¡")
            this.cantidad=0;
          }else{
            this.bodega1-=this.cantidad;
            this.totalVentas1+=this.cantidad;
          }
          
        }
        if(this.bodega1 == 0){
          this.isActive=true;
          alert("!La mercancía en la bodega 1 se ha agotado¡")
        }
        this.porcentaje50();
        this.porcentaje10();
        if(this.bodega1<=this.porcent50 && this.bodega1>=this.porcent10){
         
            alert("El inventario de la bodega uno es menor o igual al 50%")
        }
        if(this.bodega1<=this.porcent10 && this.bodega1>0){
            alert("El inventario de la bodega uno es menor al 10%")
        }
        
      },
      vender2(){
        if(this.seleccionCargo=="Libra"){
          this.convertirKAL();
          if(this.conversionKAL>this.bodega2){
            alert("!La cantidad ingresada excede el inventario¡")
            this.conversionKAL=0;
          }else{
            this.bodega2-=this.conversionKAL;
            this.totalVentas2+=this.conversionKAL;
          }
        }else if(this.seleccionCargo=="Gramos"){
          this.convertirKAG();
          if(this.conversionKAG>this.bodega2){
            alert("!La cantidad ingresada excede el inventario¡")
            this.conversionKAG=0;
          }else{
            this.bodega2-=this.conversionKAG;
            this.totalVentas1+=this.conversionKAG;
          }
        }else{
          if(this.cantidad>this.bodega2){
            alert("!La cantidad ingresada excede el inventario¡")
            this.cantidad=0;
          }else{
            this.bodega2-=this.cantidad;
          this.totalVentas2+=this.cantidad;
          }
          
        }
        if(this.bodega2 == 0){
          this.isActive2=true;
          alert("!La mercancía en la bodega 2 se ha agotado¡")
        }

        this.porcentaje50dos();
        this.porcentaje10dos();

        if(this.bodega2<=this.porcent502 && this.bodega2>=this.porcent102){
          
            alert("El inventario de la bodega dos es menor o igual al 50%")
        }
        
        if(this.bodega2<=this.porcent102 && this.bodega2>0){
           
            alert("El inventario de la bodega dos es menor o igual al 10%")
        }
  
  
      },
  
       
    }
  })
