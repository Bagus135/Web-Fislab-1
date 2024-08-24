function getWeek (){
    const date1 =  Number(new Date('2024-08-26T00:00:00'))
    const dateNow = Date.now();
    const week = Math.floor((dateNow-date1)/(1000*60*60*24*7) + 1 )
    if(week < 1 || week > 16) return `-`
    
    return week
}

export default getWeek