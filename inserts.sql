-- first query
insert into example_category(
	id,
	name
)
values
  (
    'd203aeb9e4ca431ea3912c030bb16804',
    'movie'
  ), 
  (
    '418fe79fc005442aa12946d24d125072',
    'book'
  );

-- second query
insert into example_media
	(
	id,
	name,
	genre,
	releaseYear,
	category_id,
	imageId
	)
values 
	(
  "b8a57353ac6d427d975bcdadd5471633",
  "Avengers: Endgame",
  "Action/Adventure/Drama",
  2019,
  "a0473ca2c10d408c868d223fc786c183",
  "25b7576550014565bb504fcd33aaf8e3"
  ),

  (
  "b2649955bd4f4ec28c4c44ba1a62964f",
  "Bohemian Rhapsody",
  "Musical/Documentary",
  2018,
  "a0473ca2c10d408c868d223fc786c183",
  "f8f711855ddd42f1a0c0724dd1a320cc"
  ),

  (
  "38e76a8105804638ae60e39571570af6",
  "Bride wars",
  "Comedy/Romance",
  2009,
  "a0473ca2c10d408c868d223fc786c183",
  "e96339c173bd4c53acf755aa2231a474"
  ),

  (
  "3fe5ab479fc24beba1ff665cade4d279",
  "Fight Club",
  "Thriller/Action",
  1999,
  "a0473ca2c10d408c868d223fc786c183",
  "2560452d08324504945ba9c4f55876e1"
  ),

  (
  "e9784ac122074524bc51dd6a742cd5b6",
  "Oppenheimer",
  "Biography/Drama/History",
  2023,
  "a0473ca2c10d408c868d223fc786c183",
  "e818e1a0c2f94ce59a147403e7d140ce"
  ),

  (
  "52d3b28a2e74405883fe4c624a7dce25",
  "Parasite",
  "Thriller/Comedy",
  2019,
  "a0473ca2c10d408c868d223fc786c183",
  "6748b2dc05d848b081b51b231a2b802c"
  ),

  (
  "8b7b8a653e754324a57b32e4a07d3c5c",
  "Star Wars: Episode VI - Return of the Jedi",
  "Action/Adventure/Fantasy",
  1983,
  "a0473ca2c10d408c868d223fc786c183",
  "7dab3802945149f99614d15925747043"
  ),

  (
  "b6f30af9a3a54d12901ac779a1241851",
  "The Lord of the Rings: The Return of the King",
  "Action/Adventure/Drama",
  2003,
  "a0473ca2c10d408c868d223fc786c183",
  "a660a3e689ab48c6a3eb681e74d4f701"
  ),

  (
  "f27f4db9febf41538c7ff4e9afe4e00e",
  "The Theory of Everything",
  "Biography/Drama/Romance",
  2014,
  "a0473ca2c10d408c868d223fc786c183",
  "8a75533655a7490ca27c1e5d6ca0d8e4"
  ),

  (
  "0f36784339804c6c8b2dba4630cf09a2",
  "Thor: Ragnarok",
  "Action/Adventure/Comedy",
  2017,
  "a0473ca2c10d408c868d223fc786c183",
  "7e7f1565a18a433b8fc37e50c1e9b250"
  ),

  (
  "b54763fbb3354533960db8c3ed833050",
  "Variola Vera",
  "Horror/Drama",
  1982,
  "a0473ca2c10d408c868d223fc786c183",
  "ec97d7b63fc24d3891238c9473f071cb"
  );

-- third query
insert into example_movie(
  id,
  director,
  `cast`,
  `length`,
  description,
  screenwriters,
  media_id
)
values
  (
  "2de63c3bc5684f81b0f51823ee4267ae",
  "",
  "",
  120,
  "",
  "",
  "b8a57353ac6d427d975bcdadd5471633"
  ),

  (
  "12a756fc6cd2489981df9be9559af337",
  "",
  "",
  120,
  "",
  "",
  "b2649955bd4f4ec28c4c44ba1a62964f"
  ),

  (
  "9d016e74ade6402f937bdb7e8c20062a",
  "",
  "",
  120,
  "",
  "",
  "38e76a8105804638ae60e39571570af6"
  ),

  (
  "2fb1ae10218a4794a2a22e9b515b1f47",
  "",
  "",
  120,
  "",
  "",
  "3fe5ab479fc24beba1ff665cade4d279"
  ),

  (
  "23053a8a791745dbaf5065ee17cc35a6",
  "",
  "",
  120,
  "",
  "",
  "e9784ac122074524bc51dd6a742cd5b6"
  ),

  (
  "c418bd883397488cad64bf1e5bd35dc0",
  "",
  "",
  120,
  "",
  "",
  "52d3b28a2e74405883fe4c624a7dce25"
  ),

  (
  "a9aa02faceef464c9380e2c91817abf5",
  "",
  "",
  120,
  "",
  "",
  "8b7b8a653e754324a57b32e4a07d3c5c"
  ),

  (
  "0d64b3e76988486b9980bfa6854c081f",
  "",
  "",
  120,
  "",
  "",
  "b6f30af9a3a54d12901ac779a1241851"
  ),

  (
  "856febbaf833471db7f92a9101226372",
  "",
  "",
  120,
  "",
  "",
  "f27f4db9febf41538c7ff4e9afe4e00e"
  ),

  (
  "52a24e2b1da44c8385e5a80231f5aee5",
  "",
  "",
  120,
  "",
  "",
  "0f36784339804c6c8b2dba4630cf09a2"
  ),

  (
  "a82d4989f3ff469cb41b52c032ede39a",
  "",
  "",
  120,
  "",
  "",
  "b54763fbb3354533960db8c3ed833050"
  );