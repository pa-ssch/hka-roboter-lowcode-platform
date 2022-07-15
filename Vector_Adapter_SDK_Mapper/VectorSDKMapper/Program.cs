var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddControllers();
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseCors(x => x.AllowAnyMethod().AllowAnyHeader().SetIsOriginAllowed(origin => true).AllowCredentials());
app.UseAuthorization();
app.MapControllers();
app.Run();




//// Test Vector
//using Anki.Vector;
//using Anki.Vector.Types;

//using var robot = await Robot.NewConnection();

//await robot.Control.RequestControl();

//if (robot.Status.IsOnCharger)
//    await robot.Behavior.DriveOffCharger();

//await robot.Behavior.SetHeadAngle(-5.Degrees());
//await robot.Behavior.SetLiftHeight(0);

//await robot.Behavior.DriveStraight(100, 1000);

//while (robot.World.LightCube?.Pose is null)
//{
//    await robot.World.ConnectCube();
//}


//if (robot.World.LightCube != null)
//{
//    var dockingResult1 = await robot.Behavior.GoToCube(200, 5);
//    var dockingResult2 = await robot.Behavior.DockWithCube(robot.World.LightCube, numRetries: 5);
//    await robot.Motors.SetLiftMotor(1);

//    await robot.Behavior.TurnInPlace(360.Degrees());
//    await robot.Behavior.TurnInPlace(360.Degrees());
//    await robot.Behavior.TurnInPlace(360.Degrees());
//    await robot.Behavior.TurnInPlace(360.Degrees());
//    await robot.Behavior.TurnInPlace(360.Degrees());
//}

//Console.ReadLine();