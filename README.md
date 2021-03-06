# Web ja mobiiliohjelmointi kevät 2019

Kurssi perehtyy node.js:n avulla sekä frontend- että backend-kehittämiseen
Kurssin työt löytyvät omista kansioistaan ja tehtävien vaiheet tageistä.
README.md on liittety joihinkin tehtäviin. Tämä sisältää lähninnä käyttöohjeet.
Kurssin info löytyy [Pepistä](https://opas.peppi.utu.fi/fi/opintojakso/DTEK2040/8780) ja alkuperäinen googlesta hakusanoilla ["fullstack mooc HY"](https://duckduckgo.com/?q=site%3Agithub.io+fullstack+hy&t=h_&ia=web). Uudemmat versiot saattavat poiketa edellisistä.

Lataaminen: 
`git clone https://github.com/avhalo/web-ja-mobiili19/`

## Kurssista
Merkittävin ero tässä git-repositoryssa minun omaan työkansioon verrattuna on, että .git kansion lisäksi juurikansiossa on _.gitignore_-tiedosto. Sen sisältö on lähinä seuraava: 

.gitignore:

`node_modules`

Tämä käy komennolla

`echo "node_modules" >> .gitignore`

Tämä estää node.js:n käyttämien moduulien lataamisen Githubiin. Tämä voi olla jopa 50mb, joten tämä on tärkeää.

Turvallisuuden takia joitain muitakin poikkeuksia on _.gitignore_-tiedostossa. Mukana siis tiedostot, jossa lähinnä palvelinpuolen salasanat.


Kurssillä tarvitaan Github-sovellusta. Tämä vaatii git:in käyttöä
Gitin saa asenetttua Git:in [omilta sivuilta](https://git-scm.com/downloads) tai käyttäen omaa [Git for windows](https://gitforwindows.org) haarukkaa (mukana GUI, ei suositella). Githubin/Gitin käyttöönotto kestää noin 30min jos opettelee vain perusteet.

Lyhyesti [git-komennot](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)käyttöjärjestyksessä:

`git init` --- VCS-juuren asettaminen nykyiseen työkansioon

`git status` --- Tiedot kyseisestä projektista

`git add .`-- Lisää hakemiston tiedostot ja kansiot staged-vaiheeseen gitissä

`git commit -m "message"` -- Lisää staged-vaiheen muutokset comnmit-vaiheeseen. Voi myös käyttää komentoa _git commit_ jolloin tekstieditori aukeaa lisätäkseen muutos-login. Tyhjää muutosta ei suositella, mutta silloin voi käyttä vipuja _-a --allow-empty-message -m ""_. Myös vipua _--amend_ voi käyttää jos haluaa vain lisätä edelliseen committiin.

Tässä kohtaa tulee olla myös github-tili. Käyttöönotto on helppoa ja siihen github antaa hyvät ohjeet. Alussa tulee kuitenkin luoda projekti githubin kautta.

`git remote add https://github.com/[kayttaja]/[projekti].git` -- Lisää Gitin tietoon verkko-osoitteen, johon muutoksia voi tehdä

`git push -u origin master` -- "Työntää" commit-vaiheen yllä määriteltyyn verkkoon brancheilla origin/master.

`git log` -- Näyttää tehdyt muutokset repositoryssä

Tämän jälkeen voidaan toistaa komentoja _commit -a_ ja  _push_ tarpeen tullen.
Muut oleellisimmat comennot ovat _pull_ ja _clone_. Vanhat versiot näkee komennolla _diff_ ja _log_(sha1-hashit). Palauttaminen komennoilla _checkout_ ja _revert_.

### Muuta
Tarvittava node.js ympäristö saadaan näillä moduuleilla:
`create-react-app axios express nodemon mongoose dotenv`