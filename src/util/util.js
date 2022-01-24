const getNth = (day)=>{

    if(day>3 && day< 21 ) return day+"th";
    switch(day%10){
        case 1: return day+"st";
        case 2: return day+"nd";
        case 3: return day+"rd";
        default : return day+"th"
    }
}

export const formateDate = ()=>{
        const dateData = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] ;
           const date = dateData.getDate();
           const monthName = months[dateData.getMonth()] 
        return getNth(date)+ " " + monthName +" "+dateData.getFullYear() 
}