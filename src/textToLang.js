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
  }
};

export default textToLang;
