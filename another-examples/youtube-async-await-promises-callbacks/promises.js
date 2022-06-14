function requestHandler(request, response) {
    User.findId(request.UserId)
        .then(function (user) {
            return Task.findById(user.taskId)
        })
        .then(function (tasks) {
            tasks.completed = true;
            return tasks.save();
        })
        .then(function () {
            return res.send('Tasks completed');
        })
        .catch(function (errores) {
            res.send(errores);
        })
}