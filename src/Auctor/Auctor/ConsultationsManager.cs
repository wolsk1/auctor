namespace VolskNet.Auctor
{
    public class ConsultationsManager : IConsultationsManager
    {
        public bool Add(Consultation consultation)
        {
            var cmd = DbHelper.CreateCommand();
            cmd.CommandText = "INSERT INTO public.consultation values(default, @roomId, @lecturerId, @startTime, @endTime,@date)";

            cmd.AddParam("@roomId", consultation.RoomId);
            cmd.AddParam("@lecturerId", consultation.LecturerId);
            cmd.AddParam("@startTime", consultation.StartTime);
            cmd.AddParam("@endTime", consultation.EndTime);
            cmd.AddParam("@date", consultation.Date);

            return cmd.ExecuteNonQuery() > 0;
        }
    }
}