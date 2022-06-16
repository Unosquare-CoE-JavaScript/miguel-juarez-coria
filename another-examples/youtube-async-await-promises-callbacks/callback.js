//Ejemplo de un callback
//Dificil de mantener en una aplicación real
//se le conoce como la piramide de la muerte o "callback hell"

function requestHandler(request, response){
    User.findById(request.userId, function(err, user){
        if (err){
            console.log(err);
        }else{
            Tasks.findById(user.TaskId, function(err, tasks){
                if (err){
                    console.log(err);
                }else{
                    tasks.completed = true;
                    tasks.save(function(err){
                        if (err){
                            console.log(err);
                        }else{
                            res.send(tasks.completed);
                        }
                    })
                }
            })
        }
    })
}