
//Вам вручили сверхсекретный файл и две функции, позволяющие читать и записывать содержимое файла, 
//но только при наличии пароля. Первая функция, getSecret, возвращает содержимое файла, если пароль 
//указан правильно, и регистрирует все попытки обращения к файлу. Вторая функция, setSecret, обновляет 
//содержимое файла и обнуляет счетчик обращений. Заполните пробелы в приведенном ниже коде и 
//протестируйте функции.

function getSecret(file, secretPassword) {  //Объект superSecretFile передается функции getSecret, и ему 
         file.opened = file.opened + 1;   // назначается имя параметра file. Нужно проследить за тем, чтобы 
            if (secretPassword == file.password) { //при обращении к свойствам объекта (таким, как opened 
                return file.contents;       //и password) использовалась запись с именем объекта file и точкой
            }
              else {
                      return "Invalid password! No secret for you.";
                   }
}

function setSecret(file, secretPassword, secret) {
          if (secretPassword == file.password) {  //Тоже самое и здесь
            file.opened = 0;
            file.contents = secret;
          }
}

var superSecretFile = {
      level: "classified",
      opened: 0,
      password: 2,
      contents: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 2); //Объект SuperSecretFile может передаваться функиям getSecret и setSecret

console.log(secret);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");  //см.выше
secret = getSecret(superSecretFile, 2);

console.log(secret);