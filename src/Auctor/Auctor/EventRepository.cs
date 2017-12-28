namespace VolskNet.Auctor
{
    using System;
    using System.Threading.Tasks;
    using Domain;

    public class EventRepository : IRepository<ConsultationEvent>
    {
        private readonly IDataManager dataManager;

        public EventRepository(IDataManager dataManager)
        {
            this.dataManager = dataManager;
        }

        public bool Add(ConsultationEvent @event)
        {
            var cmd = DbHelper.CreateCommand();
            //(id, name, course_id, value, lecturer_id, need_lecturer, valid_from, valid_till)
            cmd.CommandText = @"INSERT INTO consult_event 
                                values(default, @name, @course_id, @value, @lecturer_id, @need_lecturer, @valid_from,  @valid_till)";
            cmd.AddParam("@name", @event.Name);
            cmd.AddParam("@course_id", @event.CourseId);
            cmd.AddParam("@value", @event.Value);
            cmd.AddParam("@lecturer_id", @event.LecturerId);
            cmd.AddParam("@need_lecturer", @event.NeedLecturer);
            cmd.AddParam("@valid_from", @event.ValidFrom);
            cmd.AddParam("@valid_till", @event.ValidTill);

            return cmd.ExecuteNonQuery() > 0;
        }

        public bool Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<ConsultationEvent> FindAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool Update(ConsultationEvent @event)
        {
            var cmd = DbHelper.CreateCommand();
            cmd.CommandText = $@"UPDATE consultation
                                SET name=@name, course_id=@course_id, value=@value,
                                lecturer_id=@lecturer_id, need_lecturer=@need_lecturer, 
                                valid_from=@valid_from, valid_till=@valid_till
                                WHERE id='{@event.Id}'; ";

            cmd.AddParam("@name", @event.Name);
            cmd.AddParam("@course_id", @event.CourseId);
            cmd.AddParam("@value", @event.Value);
            cmd.AddParam("@lecturer_id", @event.LecturerId);
            cmd.AddParam("@need_lecturer", @event.NeedLecturer);
            cmd.AddParam("@valid_from", @event.ValidFrom);
            cmd.AddParam("@valid_till", @event.ValidTill);

            return cmd.ExecuteNonQuery() > 0;
        }
    }
}