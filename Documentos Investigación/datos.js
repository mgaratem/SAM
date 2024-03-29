/* Aqui van los datos del test */

var preguntasPorHoja = 5;

var puntajes = {
	'calculo': 0,
	'fisico': 0,
	'biologico': 0,
	'mecanico': 0,
	'social': 0,
	'literatura': 0,
	'persuasivo': 0,
	'artistico': 0,
	'musical': 0,
};
var temas = {
	'calculo': 
				{'idcontenido': 'calculo', 'nombre': 'Cálculo' },
	'fisico': 
				{'idcontenido': 'fisicoymecanico', 'nombre': 'Físico' },
	'biologico': 
				{'idcontenido': 'biologico', 'nombre': 'Biológico' },
	'mecanico': 
				{'idcontenido': 'fisicoymecanico', 'nombre': 'Mecánico' },
	'social': 
				{'idcontenido': 'social', 'nombre': 'Social' },
	'literatura': 
				{'idcontenido': 'literatura', 'nombre': 'Literatura' },
	'persuasivo': 
				{'idcontenido': 'persuasivo', 'nombre': 'Persuasivo' },
	'artistico': 
				{'idcontenido': 'artisticoymusical', 'nombre': 'Artístico' },
	'musical': 
				{'idcontenido': 'artisticoymusical', 'nombre': 'Musical' },
}
var sexo;

var actividades = [
	{'tema': 'mecanico', 'actividad': '1. Armar y desarmar aparatos electrónicos'},
	{'tema': 'persuasivo', 'actividad': '2. Participar en debates y argumentos'},
	{'tema': 'calculo', 'actividad': '3. Resolver rompecabezas numéricos'},
	{'tema': 'musical', 'actividad': '4. Aprender a leer notas (partituras musicales)'},
	{'tema': 'biologico', 'actividad': '5. Hacer análisis de sangre.'},
	{'tema': 'social', 'actividad': '6. Visitar y hacer obras humanitarias'},
	{'tema': 'artistico', 'actividad': '7. Realizar dibujos, pinturas, paisajes'},
	{'tema': 'fisico', 'actividad': '8. Aprender el proceso del universo (planetas)'},
	{'tema': 'literatura', 'actividad': '9. Escribir ensayos, novelas, cuentos, para una revista.'},
	{'tema': 'artistico', 'actividad': '10. Recibir un juego de pintura al óleo como regalo'},
	{'tema': 'calculo', 'actividad': '11. Ejecutar ecuaciones aritméticas.'},
	{'tema': 'literatura', 'actividad': '12. Ser escritor de novelas.'},
	{'tema': 'social', 'actividad': '13. Participar en campañas contra la delincuencia juvenil.'},
	{'tema': 'fisico', 'actividad': '14. Recibir un telescopio como regalo'},
	{'tema': 'musical', 'actividad': '15. Saber distinguir y apreciar la buena música'},
	{'tema': 'mecanico', 'actividad': '16. Manejar herramientas o maquinaria mecánica'},
	{'tema': 'persuasivo', 'actividad': '17. Ayudar a los candidatos políticos en su campaña'},
	{'tema': 'biologico', 'actividad': '18. Hacer análisis de planetas, estrellas, etc.'},
	{'tema': 'social', 'actividad': '19. Colaborar con otros para bien de ellos y de mí mismo'},
	{'tema': 'artistico', 'actividad': '20. Asistir a exposiciones de pintura.'},
	{'tema': 'social', 'actividad': '21. Impartir conocimientos a aquellas personas que no las tienen.'},
	{'tema': 'calculo', 'actividad': '22. Convertir radianes a grados'},
	{'tema': 'musical', 'actividad': '23. Tener discos de música clásica'},
	{'tema': 'biologico', 'actividad': '24. Aprender a practicar primeros auxilios'},
	{'tema': 'literatura', 'actividad': '25. Leer a los clásicos'},
	{'tema': 'mecanico', 'actividad': '26.Diseñar elementos mecánicos'},
	{'tema': 'persuasivo', 'actividad': '27. Hacer campañas con elementos estadísticos'},
	{'tema': 'literatura', 'actividad': '28. Saber distinguir y apreciar la buena literatura'},
	{'tema': 'social', 'actividad': '29. Ayudar a encontrar empleo a personas de escasos recursos'},
	{'tema': 'fisico', 'actividad': '30. Informarme sobre la energía atómica'},
	{'tema': 'artistico', 'actividad': '31. Leer libros sobre arte'},
	{'tema': 'calculo', 'actividad': '32. Hacer operaciones matemáticas mentalmente'},
	{'tema': 'musical', 'actividad': '33. Escuchar conciertos en el teatro, conservatorio'},
	{'tema': 'mecanico', 'actividad': '34. Instalar o modificar un contacto eléctrico'},
	{'tema': 'persuasivo', 'actividad': '35. Convencer a otros para que hagan lo que yo creo deben hacer'},
	{'tema': 'biologico', 'actividad': '36. Cuidar un pequeño acuario'},
	{'tema': 'calculo', 'actividad': '37. Usar una regla de calculo'},
	{'tema': 'persuasivo', 'actividad': '38. Ser diseñador y publicista de artículos nuevos'},
	{'tema': 'fisico', 'actividad': '39. Hacer una colección de un grupo de rocas o fósiles'},
	{'tema': 'biologico', 'actividad': '40. Observar las costumbres de los animales'},
	{'tema': 'artistico', 'actividad': '41. Aprender arte con un artista famoso'},
	{'tema': 'literatura', 'actividad': '42. leer poemas ante un público numeroso'},
	{'tema': 'mecanico', 'actividad': '43. Observar el proceso de una línea de producción'},
	{'tema': 'artistico', 'actividad': '44.Diseñar escenarios para representaciones teatrales'},
	{'tema': 'fisico', 'actividad': '45. Observar el movimiento aparente de las estrellas'},
	{'tema': 'mecanico', 'actividad': '46. Soldar circuitos digitales'},
	{'tema': 'persuasivo', 'actividad': '47. Defender un punto de vista de alguna persona.'},
	{'tema': 'calculo', 'actividad': '48. Calcular porcentaje'},
	{'tema': 'social', 'actividad': '49. Trabajar con personas discapacitadas'},
	{'tema': 'artistico', 'actividad': '50. Diseñar y desarrollar productos y servicios'},
	{'tema': 'biologico', 'actividad': '51. Asistir a una operación medica'},
	{'tema': 'literatura', 'actividad': '52. Participar en concursos literarios'},
	{'tema': 'fisico', 'actividad': '53. Estudiar el aspecto luminoso de la luz'},
	{'tema': 'musical', 'actividad': '54. Asistir a conciertos musicales'},
	{'tema': 'persuasivo', 'actividad': '55. Ser líder de un grupo'},
	{'tema': 'social', 'actividad': '56. Trabajar y atender niños especiales'},
	{'tema': 'fisico', 'actividad': '57. Visitar un exposición científica'},
	{'tema': 'artistico', 'actividad': '58. Diseñar el programa de promoción de un proyecto'},
	{'tema': 'calculo', 'actividad': '59. Consultar tablas de logaritmos y raíces'},
	{'tema': 'musical', 'actividad': '60. Escribir canciones'},
	{'tema': 'biologico', 'actividad': '61. Leer libros sobre funcionamientos de organismos vivos'},
	{'tema': 'literatura', 'actividad': '62. Corregir ensayos o artículos periodísticos'},
	{'tema': 'mecanico', 'actividad': '63. Operar maquinas de control numéricos'},
	{'tema': 'calculo', 'actividad': '64. Ayudar a otras personas en problemas matemáticos'},
	{'tema': 'artistico', 'actividad': '65. Dibujar o delinear personas o cosas'},
	{'tema': 'mecanico', 'actividad': '66. Armar circuitos electrónicos básicos (contador de tiempo, sumadora)'},
	{'tema': 'literatura', 'actividad': '67. Escribir reseñas criticas en revistas y periódicos'},
	{'tema': 'fisico', 'actividad': '68. Estudiar los cambios del tiempo y sus causas'},
	{'tema': 'biologico', 'actividad': '69. Hacer colecciones de insectos'},
	{'tema': 'musical', 'actividad': '70. Formar parte de un conjunto musical'},
	{'tema': 'social', 'actividad': '71. Escuchar a otros con paciencia y comprender su punto de vista'},
	{'tema': 'persuasivo', 'actividad': '72. Organizar y dirigir campañas, festivales y excursiones'},
	{'tema': 'calculo', 'actividad': '73. Ilustrar problemas geométricos con la ayuda del juego geométrico.'},
	{'tema': 'musical', 'actividad': '74. Tocar un instrumento musical'},
	{'tema': 'persuasivo', 'actividad': '75. Dirigir un grupo o equipo en situaciones difíciles'},
	{'tema': 'biologico', 'actividad': '76. Cultivar plantas exóticas'},
	{'tema': 'social', 'actividad': '77. Visitar familias con problemas socioeconómicos.'},
	{'tema': 'literatura', 'actividad': '78. Escribir cuentos o novelas para su publicación'},
	{'tema': 'mecanico', 'actividad': '79. Observar líneas de producción'},
	{'tema': 'musical', 'actividad': '80. Saber distinguir y apreciar las buenas canciones'},
	{'tema': 'fisico', 'actividad': '81. Visitar un observatorio astronómico'},
	{'tema': 'mecanico', 'actividad': '82. Observar las maquinas cuando las montan'},
	{'tema': 'literatura', 'actividad': '83. Leer literatura de autores celebres'},
	{'tema': 'fisico', 'actividad': '84. Experimentar el proceso de la combustión'},
	{'tema': 'artistico', 'actividad': '85. Hacer un proyecto de decoración de interiores'},
	{'tema': 'social', 'actividad': '86. Atender a personas con problemas emocionales'},
	{'tema': 'persuasivo', 'actividad': '87. Diseñar programas de publicidad'},
	{'tema': 'calculo', 'actividad': '88. Resolver problemas matemáticos'},
	{'tema': 'musical', 'actividad': '89. Crear y dirigir un grupo musical'},
	{'tema': 'biologico', 'actividad': '90. Conocer y comprender el funcionamiento del cuerpo humano'},
];


var tabla = {
	'calculo': {
		'H': [
			{'pts': 12, '%': 1},
			{'pts': 17, '%': 5},
			{'pts': 20, '%': 10},
			{'pts': 24, '%': 20},
			{'pts': 25, '%': 30},
			{'pts': 34, '%': 40},
			{'pts': 37, '%': 50},
			{'pts': 39, '%': 60},
			{'pts': 42, '%': 70},
			{'pts': 44, '%': 80},
			{'pts': 47, '%': 90},
			{'pts': 48, '%': 95},
			{'pts': 50, '%': 99},
		],
		'M': [
			{'pts': 11, '%': 1},
			{'pts': 14, '%': 5},
			{'pts': 17, '%': 10},
			{'pts': 20, '%': 20},
			{'pts': 23, '%': 30},
			{'pts': 25, '%': 40},
			{'pts': 30, '%': 50},
			{'pts': 33, '%': 60},
			{'pts': 37, '%': 70},
			{'pts': 41, '%': 80},
			{'pts': 45, '%': 90},
			{'pts': 48, '%': 95},
			{'pts': 49, '%': 99},
		]
	},
	'fisico': {
		'H': [
			{'pts': 18, '%': 1},
			{'pts': 24, '%': 5},
			{'pts': 27, '%': 10},
			{'pts': 30, '%': 20},
			{'pts': 32, '%': 30},
			{'pts': 34, '%': 40},
			{'pts': 36, '%': 50},
			{'pts': 38, '%': 60},
			{'pts': 39, '%': 70},
			{'pts': 41, '%': 80},
			{'pts': 44, '%': 90},
			{'pts': 46, '%': 95},
			{'pts': 49, '%': 99},
		],
		'M': [
			{'pts': 18, '%': 1},
			{'pts': 22, '%': 5},
			{'pts': 23, '%': 10},
			{'pts': 27, '%': 20},
			{'pts': 29, '%': 30},
			{'pts': 32, '%': 40},
			{'pts': 34, '%': 50},
			{'pts': 36, '%': 60},
			{'pts': 38, '%': 70},
			{'pts': 40, '%': 80},
			{'pts': 43, '%': 90},
			{'pts': 46, '%': 95},
			{'pts': 48, '%': 99},
		]
	},
	'biologico': {
		'H': [
			{'pts': 15, '%': 1},
			{'pts': 20, '%': 5},
			{'pts': 22, '%': 10},
			{'pts': 26, '%': 20},
			{'pts': 27, '%': 30},
			{'pts': 29, '%': 40},
			{'pts': 32, '%': 50},
			{'pts': 35, '%': 60},
			{'pts': 37, '%': 70},
			{'pts': 40, '%': 80},
			{'pts': 44, '%': 90},
			{'pts': 46, '%': 95},
			{'pts': 50, '%': 99},
		],
		'M': [
			{'pts': 16, '%': 1},
			{'pts': 22, '%': 5},
			{'pts': 24, '%': 10},
			{'pts': 26, '%': 20},
			{'pts': 29, '%': 30},
			{'pts': 31, '%': 40},
			{'pts': 34, '%': 50},
			{'pts': 36, '%': 60},
			{'pts': 38, '%': 70},
			{'pts': 40, '%': 80},
			{'pts': 45, '%': 90},
			{'pts': 47, '%': 95},
			{'pts': 50, '%': 99},
		]
	},
	'mecanico': {
		'H': [
			{'pts': 16, '%': 1},
			{'pts': 22, '%': 5},
			{'pts': 26, '%': 10},
			{'pts': 30, '%': 20},
			{'pts': 32, '%': 30},
			{'pts': 34, '%': 40},
			{'pts': 36, '%': 50},
			{'pts': 38, '%': 60},
			{'pts': 40, '%': 70},
			{'pts': 42, '%': 80},
			{'pts': 45, '%': 90},
			{'pts': 47, '%': 95},
			{'pts': 49, '%': 99},
		],
		'M': [
			{'pts': 15, '%': 1},
			{'pts': 17, '%': 5},
			{'pts': 20, '%': 10},
			{'pts': 22, '%': 20},
			{'pts': 24, '%': 30},
			{'pts': 26, '%': 40},
			{'pts': 28, '%': 50},
			{'pts': 30, '%': 60},
			{'pts': 32, '%': 70},
			{'pts': 36, '%': 80},
			{'pts': 39, '%': 90},
			{'pts': 42, '%': 95},
			{'pts': 47, '%': 99},
		]
	},
	'social': {
		'H': [
			{'pts': 19, '%': 1},
			{'pts': 24, '%': 5},
			{'pts': 27, '%': 10},
			{'pts': 29, '%': 20},
			{'pts': 31, '%': 30},
			{'pts': 32, '%': 40},
			{'pts': 34, '%': 50},
			{'pts': 36, '%': 60},
			{'pts': 37, '%': 70},
			{'pts': 39, '%': 80},
			{'pts': 41, '%': 90},
			{'pts': 43, '%': 95},
			{'pts': 48, '%': 99},
		],
		'M': [
			{'pts': 25, '%': 1},
			{'pts': 28, '%': 5},
			{'pts': 30, '%': 10},
			{'pts': 32, '%': 20},
			{'pts': 35, '%': 30},
			{'pts': 38, '%': 40},
			{'pts': 39, '%': 50},
			{'pts': 40, '%': 60},
			{'pts': 42, '%': 70},
			{'pts': 44, '%': 80},
			{'pts': 46, '%': 90},
			{'pts': 47, '%': 95},
			{'pts': 49, '%': 99},
		]
	},
	'literatura': {
		'H': [
			{'pts': 15, '%': 1},
			{'pts': 22, '%': 5},
			{'pts': 23, '%': 10},
			{'pts': 26, '%': 20},
			{'pts': 28, '%': 30},
			{'pts': 30, '%': 40},
			{'pts': 32, '%': 50},
			{'pts': 33, '%': 60},
			{'pts': 35, '%': 70},
			{'pts': 37, '%': 80},
			{'pts': 40, '%': 90},
			{'pts': 42, '%': 95},
			{'pts': 46, '%': 99},
		],
		'M': [
			{'pts': 15, '%': 1},
			{'pts': 24, '%': 5},
			{'pts': 25, '%': 10},
			{'pts': 28, '%': 20},
			{'pts': 30, '%': 30},
			{'pts': 32, '%': 40},
			{'pts': 34, '%': 50},
			{'pts': 36, '%': 60},
			{'pts': 38, '%': 70},
			{'pts': 40, '%': 80},
			{'pts': 43, '%': 90},
			{'pts': 46, '%': 95},
			{'pts': 49, '%': 99},
		]
	},
	'persuasivo': {
		'H': [
			{'pts': 18, '%': 1},
			{'pts': 22, '%': 5},
			{'pts': 23, '%': 10},
			{'pts': 25, '%': 20},
			{'pts': 27, '%': 30},
			{'pts': 29, '%': 40},
			{'pts': 31, '%': 50},
			{'pts': 33, '%': 60},
			{'pts': 35, '%': 70},
			{'pts': 37, '%': 80},
			{'pts': 40, '%': 90},
			{'pts': 42, '%': 95},
			{'pts': 46, '%': 99},
		],
		'M': [
			{'pts': 15, '%': 1},
			{'pts': 20, '%': 5},
			{'pts': 23, '%': 10},
			{'pts': 27, '%': 20},
			{'pts': 28, '%': 30},
			{'pts': 29, '%': 40},
			{'pts': 31, '%': 50},
			{'pts': 33, '%': 60},
			{'pts': 35, '%': 70},
			{'pts': 37, '%': 80},
			{'pts': 41, '%': 90},
			{'pts': 43, '%': 95},
			{'pts': 48, '%': 99},
		]
	},
	'artistico': {
		'H': [
			{'pts': 18, '%': 1},
			{'pts': 21, '%': 5},
			{'pts': 23, '%': 10},
			{'pts': 26, '%': 20},
			{'pts': 28, '%': 30},
			{'pts': 30, '%': 40},
			{'pts': 33, '%': 50},
			{'pts': 35, '%': 60},
			{'pts': 36, '%': 70},
			{'pts': 39, '%': 80},
			{'pts': 42, '%': 90},
			{'pts': 45, '%': 95},
			{'pts': 48, '%': 99},
		],
		'M': [
			{'pts': 20, '%': 1},
			{'pts': 25, '%': 5},
			{'pts': 27, '%': 10},
			{'pts': 30, '%': 20},
			{'pts': 32, '%': 30},
			{'pts': 34, '%': 40},
			{'pts': 35, '%': 50},
			{'pts': 37, '%': 60},
			{'pts': 40, '%': 70},
			{'pts': 43, '%': 80},
			{'pts': 47, '%': 90},
			{'pts': 48, '%': 95},
			{'pts': 50, '%': 99},
		]
	},
	'musical': {
		'H': [
			{'pts': 16, '%': 1},
			{'pts': 21, '%': 5},
			{'pts': 23, '%': 10},
			{'pts': 26, '%': 20},
			{'pts': 29, '%': 30},
			{'pts': 31, '%': 40},
			{'pts': 33, '%': 50},
			{'pts': 34, '%': 60},
			{'pts': 36, '%': 70},
			{'pts': 38, '%': 80},
			{'pts': 40, '%': 90},
			{'pts': 43, '%': 95},
			{'pts': 47, '%': 99},
		],
		'M': [
			{'pts': 21, '%': 1},
			{'pts': 25, '%': 5},
			{'pts': 28, '%': 10},
			{'pts': 32, '%': 20},
			{'pts': 35, '%': 30},
			{'pts': 36, '%': 40},
			{'pts': 37, '%': 50},
			{'pts': 38, '%': 60},
			{'pts': 40, '%': 70},
			{'pts': 42, '%': 80},
			{'pts': 45, '%': 90},
			{'pts': 47, '%': 95},
			{'pts': 49, '%': 99},
		]
	},
};
