

const restaurant = [
    {
        name:'Hacienda Carmelas',
        food:'Mexicana',
        price:'$ 300.00',
        review:'3 puntos',
        schedule:'Lun. a sáb., 08:00 a 20:00; dom., 09:00 a 20:00',
        direction:'Arteaga Frontera 27',
        distance: 3,
    },
    {
        name:'Pizzicotto',
        food:'Italiana',
        price:'$ 300.00',
        review:'4 puntos',
        schedule:'Lun. a dom., 12:00 pm a 23:00.',
        direction:'Av. Desierto de los Leones 5600, Alcantarilla.',
        distance: 2,
    },
    {
        name:'Las Alitas',
        food:'Comida Rápida',
        price:'$ 120.00',
        review:'5 puntos',
        schedule:'Dom. a jue., 12:00 a 00:00; vie y sáb., 12:00 a 01:00.',
        direction:'Galileo 17, Polanco.',
        distance: 2,
    },
    {
        name:'Chazz',
        food:'Comida Rápida',
        price:'$ 250.00',
        review:'3 puntos',
        schedule:'Lun. a dom., 12:00 a 23:00.',
        direction:'Centro Comercial Santa Fe: Av. Vasco de Quiroga 3800',
        distance: 3,
    },
    {
        name:'El Camarón del Parque',
        food:'Pescados y mariscos',
        price:'$ 300.00',
        review:'4.5 puntos',
        schedule:'Lun. a sáb., 10:00 a 18:00.',
        direction:'Del Parque 2',
        distance: 4,
    },
    {
        name:'Costeñito, cocina de mar y atractivas promociones en tragos',
        food:'Pescados y mariscos',
        price:'$ 120.00',
        review:'2 puntos',
        schedule:'Lun. a mié., 12:00 a 23:30; jue. a sáb., 12:00 a 01:30; dom., 12:00 a 23:00.',
        direction:'Plaza Metrópoli: Av. Patriotismo 229',
        distance: 1,
    },
    {
        name:'Moshi Moshi: Sushi sobre banda en la Ciudad de México',
        food:'Japonesa',
        price:'$ 100.00',
        review:'4 puntos',
        schedule:'Lun. a mié., 12:30 a 23:00; jue. a vie., 12:30 a 00:30; sáb., 13:30 a 00:30; dom., 13:30 a 22:00.',
        direction:'Ejército Nacional 843, Polanco.',
        distance: 1,
    },
    {
        name:'Dolce Amore',
        food:'Italiana',
        price:'$ 300.00',
        review:'3 puntos',
        schedule:'Mar. a jue., 13:00 a 22:30; vie. a sáb., 13:00 a 23:30; dom., 13:00 a 18:30.',
        direction:'Congreso 2A',
        distance: 1,
    }
];
//visitar cada uno de los elementos recolectando los que c indiquen
const namesRestairant = restaurant.map(restaurants => `${restaurants.name} ${restaurants.food}`);
//document.write(namesRestairant);
//filtrar a travez de la distacia
const filter = restaurant.filter(restaurants => (restaurants.distance <= 2));
//console.log(filter);
//console.log(restaurant[0].name);
//dependiendo de la distancia q se elija se mostraran los resultados que sean iguales al input elegido
//1KM
document.getElementById("ditance-one").addEventListener("click", function(){
    //filtrar a travez de la distacia
    const filter = restaurant.filter(restaurants => (restaurants.distance === 1));
    console.log(filter);
    for(let i = 0; i < filter.length; i++){
        //nombre
        let nameRestaurant = filter[i].name;
        console.log(nameRestaurant);
        //tipo food
        let foodRestaurant = filter[i].food;
        console.log(foodRestaurant);
        //price
        let priceRestaurant = filter[i].price;
        console.log(priceRestaurant);
        //review
        let reviewRestaurant = filter[i].review;
        console.log(reviewRestaurant);
        //schedule
        let scheduleRestaurant = filter[i].schedule;
        console.log(scheduleRestaurant);
        //direction
        let directionRestaurant = filter[i].direction;
        console.log( directionRestaurant);
       
       
        document.getElementById("demo").innerHTML +=`
        <li style="list-style: none">
            <button type="button" data-toggle="modal" class="botn-result" data-target="#exampleModalCenter">
                ${nameRestaurant}
            </button>
         </li>
         
         <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle"> ${nameRestaurant}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             <strong> Tipo de comida: </strong> ${foodRestaurant}
              <br>
              <strong> Precio: </strong> ${priceRestaurant}
              <br>
              <strong> Review:  </strong> ${reviewRestaurant}
              <br>
              <strong> Horario: </strong> ${scheduleRestaurant}
              <br>
              <strong> Dirección: </strong> ${directionRestaurant}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>   
         `;




         
    }
    
});
//2KM
document.getElementById("distance-two").addEventListener("click", function(){
    //filtrar a travez de la distacia
    const filter = restaurant.filter(restaurants => (restaurants.distance === 2));
    console.log(filter);
    for(let i = 0; i < filter.length; i++){
        //nombre
        let nameRestaurant = filter[i].name;
        console.log(nameRestaurant);
        //tipo food
        let foodRestaurant = filter[i].food;
        console.log(foodRestaurant);
        //price
        let priceRestaurant = filter[i].price;
        console.log(priceRestaurant);
        //review
        let reviewRestaurant = filter[i].review;
        console.log(reviewRestaurant);
        //schedule
        let scheduleRestaurant = filter[i].schedule;
        console.log(scheduleRestaurant);
        //direction
        let directionRestaurant = filter[i].direction;
        console.log( directionRestaurant);
       
       
        document.getElementById("demo").innerHTML +=`
        <li style="list-style: none">
            <button type="button" data-toggle="modal" class="botn-result" data-target="#exampleModalCenter">
                ${nameRestaurant}
            </button>
         </li>
         
         <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle"> ${nameRestaurant}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             <strong> Tipo de comida: </strong> ${foodRestaurant}
              <br>
              <strong> Precio: </strong> ${priceRestaurant}
              <br>
              <strong> Review:  </strong> ${reviewRestaurant}
              <br>
              <strong> Horario: </strong> ${scheduleRestaurant}
              <br>
              <strong> Dirección: </strong> ${directionRestaurant}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>   
         `;


    }
    
});
//3KM
document.getElementById("distance-three").addEventListener("click", function(){
    //filtrar a travez de la distacia
    const filter = restaurant.filter(restaurants => (restaurants.distance >= 3));
    console.log(filter);
    for(let i = 0; i < filter.length; i++){
         //nombre
         let nameRestaurant = filter[i].name;
         console.log(nameRestaurant);
         //tipo food
         let foodRestaurant = filter[i].food;
         console.log(foodRestaurant);
         //price
         let priceRestaurant = filter[i].price;
         console.log(priceRestaurant);
         //review
         let reviewRestaurant = filter[i].review;
         console.log(reviewRestaurant);
         //schedule
         let scheduleRestaurant = filter[i].schedule;
         console.log(scheduleRestaurant);
         //direction
         let directionRestaurant = filter[i].direction;
         console.log( directionRestaurant);
        
        
         document.getElementById("demo").innerHTML +=`
         <li style="list-style: none">
             <button type="button" data-toggle="modal" class="botn-result" data-target="#exampleModalCenter">
                 ${nameRestaurant}
             </button>
          </li>
          
          <!-- Modal -->
       <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
         <div class="modal-dialog modal-dialog-centered" role="document">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="exampleModalCenterTitle"> ${nameRestaurant}</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div class="modal-body">
              <strong> Tipo de comida: </strong> ${foodRestaurant}
               <br>
               <strong> Precio: </strong> ${priceRestaurant}
               <br>
               <strong> Review:  </strong> ${reviewRestaurant}
               <br>
               <strong> Horario: </strong> ${scheduleRestaurant}
               <br>
               <strong> Dirección: </strong> ${directionRestaurant}
             </div>
             <div class="modal-footer">
               <button type="button" id="close" class="btn btn-secondary" data-dismiss="modal">Close</button>
             </div>
           </div>
         </div>
       </div>   
          `;
 
 
    }
    
});




