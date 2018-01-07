namespace VolskNet.Auctor
{
    using System.Linq;

    public static class StringUtils
    {
        public static string ToPascalCase(this string source, char seperator)
        {
            if (string.IsNullOrEmpty(source))
            {
                return source;
            }

            var firstChar = source.Substring(0, 1);
            source = source.Remove(0, 1);
            source = firstChar.ToUpper() + source;

            var hasSeperator = source.Any(c => c.Equals(seperator));

            if (!hasSeperator)
            {
                return source;
            }

            

            do
            {
                var seperatorPlace = source.IndexOf(seperator);

                if (seperatorPlace == source.Length - 1)
                {
                    break;
                }

                var replacableChar = source.Substring(seperatorPlace+1, 1);                
                source = source.Replace($"{seperator}{replacableChar}", replacableChar.ToUpper());
            } while (source.Any(c => c.Equals(seperator)));

            return source;
        }
    }
}
