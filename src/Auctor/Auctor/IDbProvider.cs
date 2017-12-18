namespace VolskNet.Auctor
{
    public interface IDbProvider
    {
        void Select(string table, string fieldCondition = "*");
        void Insert(string table, string fields);
    }
}