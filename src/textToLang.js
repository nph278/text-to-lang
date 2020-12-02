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
        return `class PrintText{public static void main(String[] args){System.out.println(\"${text
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
        return `class PrintText {\n\tstatic void Main()\n{${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `System.Console.WriteLine(\"${a}\");`)
          .join("\n\t\t")}\n\t}\n}`;
      }
    case "C":
      if (minimal) {
        return `#include <stdio.h>\nint main(){printf(\"${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .join("\\n")}\\n\");return 0;}`;
      } else {
        return `#include <stdio.h>\n\nint main() {\n${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `\tprintf(\"${a}\\n\");`)
          .join("\n")}\n\treturn 0;\n}`;
      }
    case "Go":
      if (minimal) {
        return `package main;import"fmt";func main(){fmt.Println(\"${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .join("\\n")}\")}`;
      } else {
        return `package main\n\nimport \"fmt\"\n\nfunc main() {\n\t${text
          .split("\\")
          .join("\\\\")
          .split('"')
          .join('\\"')
          .split("\n")
          .map((a) => `fmt.Println(\"${a}\")`)
          .join("\n\t")}\n}`;
      }
  }
};

export default textToLang;
