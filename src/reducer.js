

export const initialState = {
  basket: [
    {
      id:"5452659",
      title:"Trading in the Zone: Master the Market with Confidence, Discipline and a Winning Attitude",
      price:1800,
      rating:5,
      image:"https://images-na.ssl-images-amazon.com/images/I/A1mGPw7HhYL.jpg"
    },
    {
    id:"5452659",
        title:"2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 1TB) - Silver (3rd Generation)",
        price:85000,
        rating:4,
        image:"https://m.media-amazon.com/images/I/817doxCSq7S._SX679_.jpg"
  },
    {
    id:"5452659",
        title:"2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 1TB) - Silver (3rd Generation)",
        price:85000,
        rating:4,
        image:"https://m.media-amazon.com/images/I/817doxCSq7S._SX679_.jpg"
  },
],
  user: null
 };

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

 const reducer = (state, action) => {
   console.log(action);
   switch(action.type) {
   case "ADD_TO_BASKET":
       //logic for adding logic to basket
      return { 
        ...state,
        basket: [...state.basket, action.item],
       };
      //  break;
    case "REMOVE_FROM_BASKET":
        //logic for removing itms from basket

        // we clone the basket here
       let newBasket = [...state.basket];
       
       // we check to see if product exists
       const index = state.basket.findIndex( (basketItem) => basketItem.id === action.id );

       if (index >= 0) {
         // item exists in the basket, remove it...
         newBasket.splice(index, 1);
       } else {
         console.warn(
            `cant remove product (id: ${action.id}) as its no in basket!`
         )
       }

        return { 
          ...state,
           basket: newBasket
           };
        // break;
    default:
        return state;
   }
 };

 export default reducer;
 //it allows you used the reducer outside