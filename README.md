# Web ja mobiiliohjelmointi kevät 2019

Kurssi perehtyy node.js:n avulla sekä frontend- että backend-kehittämiseen
Kurssin työt löytyvät omista kansioistaan ja tehtävien vaiheet tageistä.
README.md on liittety joihinkin tehtäviin. Tämä sisältää lähninnä käyttöohjeet.
Kurssin info löytyy [Pepistä](https://opas.peppi.utu.fi/fi/opintojakso/DTEK2040/8780) ja alkuperäinen googlesta hakusanoilla ["fullstack mooc HY"](https://duckduckgo.com/?q=site%3Agithub.io+fullstack+hy&t=h_&ia=web)


## Kurssista
Merkittävin ero työkansioon verrattuna on, että .git kansion lisäksi juurikansiossa on _.gitignore_-tiedosto. Sen sisältö on lähinä seuraava: 

`node_modules`

Turvallisuuden takia joitain muitakin poikkeuksia on _.gitignore_-tiedostossa


Kurssillä tarvitaan Github-sovellusta. Tämä vaatii git:in käyttöä
Gitin saa asenetttua Git:in [omilta sivuilta](https://git-scm.com/downloads) tai käyttäen omaa [Git for windows](https://gitforwindows.org) haarukkaa (mukana GUI). Molemmat ovat vapaan lähdekoodin.
Lyhyesti [git-komennot](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control):

`git init` --- VCS-juuren asettaminen nykyiseen työkansioon

`git status` --- Tiedot kyseisestä projektista

`git add .`-- Lisää nykyisen kansiot staged-vaiheeseen gitissä

`git commit -m "message"` -- Lisää staged-vaiheen muutokset comnmit-vaiheeseen. Voi myös käyttää komentoa _git commit_ jolloin tekstieditori aukeaa lisätäkseen muutos-login. Tyhjää muutosta ei suositella, mutta silloin voi käyttä vipuja _-a --allow-empty-message -m ""_. Myös vipua _--amend_ voi käyttää jos haluaa vain lisätä edelliseen committiin.

Tässä kohtaa tulee olla myös github-tili. Käyttöönotto on helppoa ja siihen github antaa hyvät ohjeet. Alussa tulee kuitenkin luoda projekti githubin kautta.

`git remote add https://github.com/[kayttaja]/[projekti].git` -- Lisää Gitin tietoon verkko-osoitteen, johon muutoksia voi tehdä

`git push -u origin master` -- "Työntää" commit-vaiheen yllä määriteltyyn verkkoon.

`git log` -- Näyttää tehdyt muutokset repositoryssä

Tämän jälkeen voidaan toistaa komentoja _commit -a_ ja  _push_ tarpeen tullen.
Muut oleellisimmat comennot ovat _pull_ ja _clone_

### Muuta
Tarvittava node.js ympäristö saadaan näillä moduuleilla:
`create-react-app axios express nodemon mongoose dotenv`