namespace VolskNet.Auctor
{
    using System.Threading.Tasks;

    public class ConsultationsManager : IConsultationsManager
    {
        private readonly IDataManager dataManager;

        public ConsultationsManager(IDataManager dataManager)
        {
            this.dataManager = dataManager;
        }

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

        public async Task<Consultation> FindAsync(string consultationId)
        {
            return await dataManager.GetConsultation(System.Guid.Parse(consultationId));
        }

        public bool Update(Consultation consultation)
        {
            var cmd = DbHelper.CreateCommand();
            cmd.CommandText = $@"UPDATE consultation
                                SET room_id =@roomId, lecturer_id =@lecturerId,
                                start_time =@startTime, end_time =@endTime, date =@date
                                WHERE id='{consultation.Id}'; ";

            cmd.AddParam("@roomId", consultation.RoomId);
            cmd.AddParam("@lecturerId", consultation.LecturerId);
            cmd.AddParam("@startTime", consultation.StartTime);
            cmd.AddParam("@endTime", consultation.EndTime);
            cmd.AddParam("@date", consultation.Date);

            return cmd.ExecuteNonQuery() > 0;
        }
    }
}