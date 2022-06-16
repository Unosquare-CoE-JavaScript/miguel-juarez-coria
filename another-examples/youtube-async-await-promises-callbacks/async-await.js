async function requestHandler(request, response){
    try{
        await user = await User.find(request.userId);
        await tasks = await Tasks.find(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task completed');
    }catch(e){
        res.send(e);
    }
}