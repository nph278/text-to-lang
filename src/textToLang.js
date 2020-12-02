const textToLang = (text, language, minimal) => {
  switch (language) {
    case "JavaScript":
      if (minimal) {
        return `console.log(\"${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .join("\\n")}\")`;
      } else {
        return text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `console.log(\"${a}\");`)
          .join("\n");
      }
    case "C++":
      if (minimal) {
        return `#include <iostream>\nint main(){std::cout<<\"${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .join("\\n")}\";return 0;}`;
      } else {
        return `#include <iostream>\n\nint main() {\n${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `\tstd::cout << \"${a}\" << \"\\n\";`)
          .join("\n")}\n\treturn 0;\n}`;
      }
    case "Python 3":
      if (minimal) {
        return `print(\"${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .join("\\n")}\")`;
      } else {
        return text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `print(\"${a}\")`)
          .join("\n");
      }
    case "Python 2":
      if (minimal) {
        return `print \"${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .join("\\n")}\"`;
      } else {
        return text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `print \"${a}\"`)
          .join("\n");
      }
    case "Java":
      if (minimal) {
        return `class PrintText{public static void main(String[] args){\n\t\tSystem.out.println(\"${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .join("\\n")}\");}}`;
      } else {
        return `class PrintText {\n\tpublic static void main(String[] args) {${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `System.out.println(\"${a}\");`)
          .join("\n\t\t")}\n\t}\n}`;
      }
    case "C#":
      if (minimal) {
        return `class PrintText{static void Main(){\n\t\tSystem.Console.WriteLine(\"${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .join("\\n")}\");}}`;
      } else {
        return `class PrintText {\n\tstatic void Main(string[] args)\n{${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `System.Console.WriteLine(\"${a}\");`)
          .join("\n\t\t")}\n\t}\n}`;
      }
  }
};

export default textToLang;
