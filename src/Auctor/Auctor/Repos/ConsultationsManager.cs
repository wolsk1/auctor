namespace VolskNet.Auctor
{
    using Domain;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class ConsultationsManager : IRepository<Consultation>
    {
        private readonly IDataManager dataManager;

        public ConsultationsManager(IDataManager dataManager)
        {
            this.dataManager = dataManager;
        }

        public bool Add(Consultation consultation)
        {
            var cmd = DbHelper.CreateCommand();
            cmd.CommandText = @"INSERT INTO consultation 
                                values(default, @roomId, @lecturerId, @startTime, @endTime,@date, @capacity)";

            cmd.AddParam("@roomId", consultation.RoomId);
            cmd.AddParam("@lecturerId", consultation.LecturerId);
            cmd.AddParam("@startTime", consultation.StartTime);
            cmd.AddParam("@endTime", consultation.EndTime);
            cmd.AddParam("@date", consultation.Date);
            cmd.AddParam("@capacity", consultation.Capacity);

            return cmd.ExecuteNonQuery() > 0;
        }

        public bool Delete(Guid id)
        {
            throw new NotImplementedException();
        }        

        public async Task<IEnumerable<Consultation>> FindAsync(Guid guid, string idField = "id")
        {
            using (var cmd = DbHelper.CreateCommand())
            {
                cmd.CommandText = $@"SELECT s.*, r.name as ""room_name"" 
                    FROM {AuctorTable.Consultation.ToString().ToLower()} s 
                    join {AuctorTable.Room.ToString().ToLower()} r on r.id = s.room_id
                    WHERE s.{idField} = '{guid}'";

                return await dataManager.ExecuteAndFormatQuery<Consultation>(cmd);
            }
        }

        public async Task<Consultation> FindByIdAsync(Guid consultationId)
        {                        
            using (var cmd = DbHelper.CreateCommand())
            {
                cmd.CommandText = $@"SELECT s.*, r.name as ""room_name"" 
                                    FROM {AuctorTable.Consultation.ToString().ToLower()} s 
                                    join {AuctorTable.Room.ToString().ToLower()} r on r.id = s.room_id
                                    WHERE s.id = '{consultationId}'";
                
                var consulations = await dataManager.ExecuteAndFormatQuery<Consultation>(cmd);

                return consulations.FirstOrDefault();
            }
        }

        public bool Update(Consultation consultation)
        {
            var cmd = DbHelper.CreateCommand();
            cmd.CommandText = $@"UPDATE consultation
                                SET room_id =@roomId, lecturer_id =@lecturerId,
                                start_time =@startTime, end_time =@endTime, date =@date, capacity=@capacity
                                WHERE id='{consultation.Id}'; ";

            cmd.AddParam("@roomId", consultation.RoomId);
            cmd.AddParam("@lecturerId", consultation.LecturerId);
            cmd.AddParam("@startTime", consultation.StartTime);
            cmd.AddParam("@endTime", consultation.EndTime);
            cmd.AddParam("@date", consultation.Date);
            cmd.AddParam("@capacity", consultation.Capacity);

            return cmd.ExecuteNonQuery() > 0;
        }
    }
}