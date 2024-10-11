const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const obfuscate = require('gulp-obfuscate');
const imagemin = require("gulp-imagemin");
const ts = require("gulp-typescript");



// Inicializa o projeto TypeScript com base no tsconfig.json
const tsProject = ts.createProject("tsconfig.json");

function compilaSass() {
  //comprimindo sass e compilando em css
  return gulp.src("./src/css/*.scss")
    .pipe(sass({
      outputStyle: "compressed"
    }))
    .pipe(gulp.dest("./dist/css"))
}

function compilaTypescript() {
  return tsProject.src()  // Garante que os arquivos do tsconfig.json sejam respeitados
    .pipe(tsProject())    // Compila TypeScript para JavaScript
    .pipe(uglify())       // Minifica o JavaScript compilado
    .pipe(obfuscate())    // Ofusca o JavaScript compilado
    .pipe(gulp.dest("./dist/js"));  // Coloca o resultado em dist/js
}


function comprimirImagens() {
  //comprimir imagens
  return gulp.src("./src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/img/"))
}


exports.default = function () {
  gulp.parallel(compilaSass, compilaTypescript, comprimirImagens);
}


exports.watch = function () {
  gulp.watch("src/css/*.scss", { ignoreInitial: false }, gulp.series(compilaSass))
  gulp.watch("src/js/*.ts", { ignoreInitial: false }, gulp.series(compilaTypescript))
  gulp.watch("src/img/*", { ignoreInitial: false }, gulp.series(comprimirImagens))

}


//npm run gulp