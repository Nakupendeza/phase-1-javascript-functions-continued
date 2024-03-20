// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
    return 'This Saturday, I want to bathe my dog!'
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
    return 'This Monday, I will work from home.'
}

function wrapAdjective (pretty="*"){
   return  function (adjective = 'a hard worker'){
        return `You are ${pretty}${adjective}${pretty}!`
    }
    
}