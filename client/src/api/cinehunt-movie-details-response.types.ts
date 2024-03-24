// the more manageable movie search response
interface MovieDescription {
    "#TITLE": string; 
    "#YEAR": number;
    "#IMDB_ID": string; 
    "#RANK": number;
    "#ACTORS": string;
    "#AKA": string; 
    "#IMDB_URL": string;
    "#IMDB_IV": string; 
    "#IMG_POSTER"?: string;
    "photo_width"?: number;
    "photo_height"?: number;

}

export interface MovieSearchResponse{
    ok: boolean; 
    description: MovieDescription[] | []; 
    error_code: number;
}

// the very long movie details response
export interface MovieDetailsResponse {
	short: Short;
	imdbId: string;
	top: Top;
	main: Main;
	fake: Fake;
	storyLine: StoryLine;
}

export interface Short {
	"@context": string;
	"@type": string;
	url: string;
	name: string;
	image: string;
	description: string;
	review: Review;
	aggregateRating: AggregateRating;
	contentRating: string;
	genre: string[];
	datePublished: string;
	keywords: string;
	trailer: Trailer;
	actor: Actor[];
	director: Director[];
	creator: Creator[];
	duration: string;
}

export interface Review {
	"@type": string;
	itemReviewed: ItemReviewed;
	author: Author;
	dateCreated: string;
	inLanguage: string;
	name: string;
	reviewBody: string;
	reviewRating: ReviewRating;
}

export interface ItemReviewed {
	"@type": string;
	url: string;
}

export interface Author {
	"@type": string;
	name: string;
}

export interface ReviewRating {
	"@type": string;
	worstRating: number;
	bestRating: number;
	ratingValue: number;
}

export interface AggregateRating {
	"@type": string;
	ratingCount: number;
	bestRating: number;
	worstRating: number;
	ratingValue: number;
}

export interface Trailer {
	"@type": string;
	name: string;
	embedUrl: string;
	thumbnail: Thumbnail;
	thumbnailUrl: string;
	url: string;
	description: string;
	duration: string;
	uploadDate: string;
}

export interface Thumbnail {
	"@type": string;
	contentUrl: string;
}

export interface Actor {
	"@type": string;
	url: string;
	name: string;
}

export interface Director {
	"@type": string;
	url: string;
	name: string;
}

export interface Creator {
	"@type": string;
	url: string;
	name?: string;
}

export interface Top {
	id: string;
	productionStatus: ProductionStatus;
	canHaveEpisodes: boolean;
	series: any;
	titleText: TitleText;
	titleType: TitleType;
	originalTitleText: OriginalTitleText;
	certificate: Certificate;
	releaseYear: ReleaseYear;
	releaseDate: ReleaseDate;
	runtime: Runtime;
	canRate: CanRate;
	ratingsSummary: RatingsSummary;
	meterRanking: MeterRanking;
	primaryImage: PrimaryImage;
	images: Images;
	videos: Videos;
	primaryVideos: PrimaryVideos;
	externalLinks: ExternalLinks;
	metacritic: Metacritic;
	keywords: Keywords;
	genres: Genres;
	plot: Plot;
	plotContributionLink: PlotContributionLink;
	credits: Credits;
	principalCredits: PrincipalCredit[];
	reviews: Reviews;
	criticReviewsTotal: CriticReviewsTotal;
	triviaTotal: TriviaTotal;
	engagementStatistics: EngagementStatistics;
	subNavCredits: SubNavCredits;
	subNavReviews: SubNavReviews;
	subNavTrivia: SubNavTrivia;
	subNavFaqs: SubNavFaqs;
	subNavTopQuestions: SubNavTopQuestions;
	titleGenres: TitleGenres;
	meta: Meta;
	castPageTitle: CastPageTitle;
	creatorsPageTitle: any[];
	directorsPageTitle: DirectorsPageTitle[];
	countriesOfOrigin: CountriesOfOrigin;
	production: Production;
	featuredReviews: FeaturedReviews;
	__typename: string;
}

export interface ProductionStatus {
	currentProductionStage: CurrentProductionStage;
	productionStatusHistory: ProductionStatusHistory[];
	restriction: any;
	__typename: string;
}

export interface CurrentProductionStage {
	id: string;
	text: string;
	__typename: string;
}

export interface ProductionStatusHistory {
	status: Status;
	__typename: string;
}

export interface Status {
	id: string;
	text: string;
	__typename: string;
}

export interface TitleText {
	text: string;
	__typename: string;
}

export interface TitleType {
	displayableProperty: DisplayableProperty;
	text: string;
	id: string;
	isSeries: boolean;
	isEpisode: boolean;
	categories: Category[];
	canHaveEpisodes: boolean;
	__typename: string;
}

export interface DisplayableProperty {
	value: Value;
	__typename: string;
}

export interface Value {
	plainText: string;
	__typename: string;
}

export interface Category {
	value: string;
	__typename: string;
}

export interface OriginalTitleText {
	text: string;
	__typename: string;
}

export interface Certificate {
	rating: string;
	__typename: string;
}

export interface ReleaseYear {
	year: number;
	endYear: any;
	__typename: string;
}

export interface ReleaseDate {
	day: number;
	month: number;
	year: number;
	__typename: string;
}

export interface Runtime {
	seconds: number;
	displayableProperty: DisplayableProperty2;
	__typename: string;
}

export interface DisplayableProperty2 {
	value: Value2;
	__typename: string;
}

export interface Value2 {
	plainText: string;
	__typename: string;
}

export interface CanRate {
	isRatable: boolean;
	__typename: string;
}

export interface RatingsSummary {
	aggregateRating: number;
	voteCount: number;
	__typename: string;
}

export interface MeterRanking {
	currentRank: number;
	rankChange: RankChange;
	__typename: string;
}

export interface RankChange {
	changeDirection: string;
	difference: number;
	__typename: string;
}

export interface PrimaryImage {
	id: string;
	width: number;
	height: number;
	url: string;
	caption: Caption;
	__typename: string;
}

export interface Caption {
	plainText: string;
	__typename: string;
}

export interface Images {
	total: number;
	edges: Edge[];
	__typename: string;
}

export interface Edge {
	node: Node;
	__typename: string;
}

export interface Node {
	id: string;
	__typename: string;
}

export interface Videos {
	total: number;
	__typename: string;
}

export interface PrimaryVideos {
	edges: Edge2[];
	__typename: string;
}

export interface Edge2 {
	node: Node2;
	__typename: string;
}

export interface Node2 {
	id: string;
	createdDate: string;
	isMature: boolean;
	runtime: Runtime2;
	name: Name;
	description: Description;
	timedTextTracks: any[];
	recommendedTimedTextTrack: any;
	thumbnail: Thumbnail2;
	primaryTitle: PrimaryTitle;
	playbackURLs: PlaybackUrl[];
	contentType: ContentType;
	previewURLs: PreviewUrl[];
	__typename: string;
}

export interface Runtime2 {
	value: number;
	__typename: string;
}

export interface Name {
	value: string;
	language: string;
	__typename: string;
}

export interface Description {
	value: string;
	language: string;
	__typename: string;
}

export interface Thumbnail2 {
	url: string;
	height: number;
	width: number;
	__typename: string;
}

export interface PrimaryTitle {
	id: string;
	titleText: TitleText2;
	originalTitleText: OriginalTitleText2;
	releaseYear: ReleaseYear2;
	__typename: string;
}

export interface TitleText2 {
	text: string;
	__typename: string;
}

export interface OriginalTitleText2 {
	text: string;
	__typename: string;
}

export interface ReleaseYear2 {
	year: number;
	__typename: string;
}

export interface PlaybackUrl {
	displayName: DisplayName;
	videoMimeType: string;
	videoDefinition: string;
	url: string;
	__typename: string;
}

export interface DisplayName {
	value: string;
	language: string;
	__typename: string;
}

export interface ContentType {
	id: string;
	displayName: DisplayName2;
	__typename: string;
}

export interface DisplayName2 {
	value: string;
	__typename: string;
}

export interface PreviewUrl {
	displayName: DisplayName3;
	videoMimeType: string;
	videoDefinition: string;
	url: string;
	__typename: string;
}

export interface DisplayName3 {
	value: string;
	language: string;
	__typename: string;
}

export interface ExternalLinks {
	total: number;
	__typename: string;
}

export interface Metacritic {
	metascore: Metascore;
	__typename: string;
}

export interface Metascore {
	score: number;
	__typename: string;
}

export interface Keywords {
	total: number;
	edges: Edge3[];
	__typename: string;
}

export interface Edge3 {
	node: Node3;
	__typename: string;
}

export interface Node3 {
	text: string;
	__typename: string;
}

export interface Genres {
	genres: Genre[];
	__typename: string;
}

export interface Genre {
	text: string;
	id: string;
	__typename: string;
}

export interface Plot {
	plotText: PlotText;
	language: Language;
	__typename: string;
}

export interface PlotText {
	plainText: string;
	__typename: string;
}

export interface Language {
	id: string;
	__typename: string;
}

export interface PlotContributionLink {
	url: string;
	__typename: string;
}

export interface Credits {
	total: number;
	__typename: string;
}

export interface PrincipalCredit {
	totalCredits: number;
	category: Category2;
	credits: Credit[];
	__typename: string;
}

export interface Category2 {
	text: string;
	id: string;
	__typename: string;
}

export interface Credit {
	name: Name2;
	attributes: any;
	__typename: string;
}

export interface Name2 {
	nameText: NameText;
	id: string;
	__typename: string;
}

export interface NameText {
	text: string;
	__typename: string;
}

export interface Reviews {
	total: number;
	__typename: string;
}

export interface CriticReviewsTotal {
	total: number;
	__typename: string;
}

export interface TriviaTotal {
	total: number;
	__typename: string;
}

export interface EngagementStatistics {
	watchlistStatistics: WatchlistStatistics;
	__typename: string;
}

export interface WatchlistStatistics {
	displayableCount: DisplayableCount;
	__typename: string;
}

export interface DisplayableCount {
	text: string;
	__typename: string;
}

export interface SubNavCredits {
	total: number;
	__typename: string;
}

export interface SubNavReviews {
	total: number;
	__typename: string;
}

export interface SubNavTrivia {
	total: number;
	__typename: string;
}

export interface SubNavFaqs {
	total: number;
	__typename: string;
}

export interface SubNavTopQuestions {
	total: number;
	__typename: string;
}

export interface TitleGenres {
	genres: Genre2[];
	__typename: string;
}

export interface Genre2 {
	genre: Genre3;
	__typename: string;
}

export interface Genre3 {
	text: string;
	__typename: string;
}

export interface Meta {
	canonicalId: string;
	publicationStatus: string;
	__typename: string;
}

export interface CastPageTitle {
	edges: Edge4[];
	__typename: string;
}

export interface Edge4 {
	node: Node4;
	__typename: string;
}

export interface Node4 {
	name: Name3;
	__typename: string;
}

export interface Name3 {
	id: string;
	nameText: NameText2;
	__typename: string;
}

export interface NameText2 {
	text: string;
	__typename: string;
}

export interface DirectorsPageTitle {
	credits: Credit2[];
	__typename: string;
}

export interface Credit2 {
	name: Name4;
	__typename: string;
}

export interface Name4 {
	id: string;
	nameText: NameText3;
	__typename: string;
}

export interface NameText3 {
	text: string;
	__typename: string;
}

export interface CountriesOfOrigin {
	countries: Country[];
	__typename: string;
}

export interface Country {
	id: string;
	__typename: string;
}

export interface Production {
	edges: Edge5[];
	__typename: string;
}

export interface Edge5 {
	node: Node5;
	__typename: string;
}

export interface Node5 {
	company: Company;
	__typename: string;
}

export interface Company {
	id: string;
	companyText: CompanyText;
	__typename: string;
}

export interface CompanyText {
	text: string;
	__typename: string;
}

export interface FeaturedReviews {
	edges: Edge6[];
	__typename: string;
}

export interface Edge6 {
	node: Node6;
	__typename: string;
}

export interface Node6 {
	author: Author2;
	summary: Summary;
	text: Text;
	authorRating: number;
	submissionDate: string;
	__typename: string;
}

export interface Author2 {
	nickName: string;
	__typename: string;
}

export interface Summary {
	originalText: string;
	__typename: string;
}

export interface Text {
	originalText: OriginalText;
	__typename: string;
}

export interface OriginalText {
	plainText: string;
	__typename: string;
}

export interface Main {
	id: string;
	wins: Wins;
	nominations: Nominations;
	prestigiousAwardSummary: PrestigiousAwardSummary;
	ratingsSummary: RatingsSummary2;
	episodes: any;
	videos: Videos2;
	videoStrip: VideoStrip;
	titleMainImages: TitleMainImages;
	productionStatus: ProductionStatus2;
	primaryImage: PrimaryImage2;
	imageUploadLink: ImageUploadLink;
	titleType: TitleType2;
	cast: Cast;
	creators: any[];
	directors: Director2[];
	writers: Writer[];
	isAdult: boolean;
	moreLikeThisTitles: MoreLikeThisTitles;
	triviaTotal: TriviaTotal2;
	trivia: Trivia;
	goofsTotal: GoofsTotal;
	goofs: Goofs;
	quotesTotal: QuotesTotal;
	quotes: Quotes;
	crazyCredits: CrazyCredits;
	alternateVersions: AlternateVersions;
	connections: Connections;
	soundtrack: Soundtrack;
	titleText: TitleText6;
	originalTitleText: OriginalTitleText6;
	releaseYear: ReleaseYear5;
	reviews: Reviews2;
	featuredReviews: FeaturedReviews2;
	canRate: CanRate3;
	iframeAddReviewLink: IframeAddReviewLink;
	topQuestions: TopQuestions;
	faqs: Faqs;
	releaseDate: ReleaseDate2;
	countriesOfOrigin: CountriesOfOrigin2;
	detailsExternalLinks: DetailsExternalLinks;
	spokenLanguages: SpokenLanguages;
	akas: Akas;
	filmingLocations: FilmingLocations;
	production: Production2;
	companies: Companies;
	productionBudget: ProductionBudget;
	lifetimeGross: LifetimeGross;
	openingWeekendGross: OpeningWeekendGross;
	worldwideGross: WorldwideGross;
	technicalSpecifications: TechnicalSpecifications;
	runtime: Runtime5;
	series: any;
	canHaveEpisodes: boolean;
	contributionQuestions: ContributionQuestions;
	__typename: string;
}

export interface Wins {
	total: number;
	__typename: string;
}

export interface Nominations {
	total: number;
	__typename: string;
}

export interface PrestigiousAwardSummary {
	nominations: number;
	wins: number;
	award: Award;
	__typename: string;
}

export interface Award {
	text: string;
	id: string;
	event: Event;
	__typename: string;
}

export interface Event {
	id: string;
	__typename: string;
}

export interface RatingsSummary2 {
	topRanking: TopRanking;
	__typename: string;
}

export interface TopRanking {
	id: string;
	text: Text2;
	rank: number;
	__typename: string;
}

export interface Text2 {
	value: string;
	__typename: string;
}

export interface Videos2 {
	total: number;
	__typename: string;
}

export interface VideoStrip {
	edges: Edge7[];
	__typename: string;
}

export interface Edge7 {
	node: Node7;
	__typename: string;
}

export interface Node7 {
	id: string;
	contentType: ContentType2;
	name: Name5;
	runtime: Runtime3;
	thumbnail: Thumbnail3;
	__typename: string;
}

export interface ContentType2 {
	displayName: DisplayName4;
	__typename: string;
}

export interface DisplayName4 {
	value: string;
	__typename: string;
}

export interface Name5 {
	value: string;
	__typename: string;
}

export interface Runtime3 {
	value: number;
	__typename: string;
}

export interface Thumbnail3 {
	height: number;
	url: string;
	width: number;
	__typename: string;
}

export interface TitleMainImages {
	total: number;
	edges: Edge8[];
	__typename: string;
}

export interface Edge8 {
	node: Node8;
	__typename: string;
}

export interface Node8 {
	id: string;
	url: string;
	caption: Caption2;
	height: number;
	width: number;
	__typename: string;
}

export interface Caption2 {
	plainText: string;
	__typename: string;
}

export interface ProductionStatus2 {
	currentProductionStage: CurrentProductionStage2;
	productionStatusHistory: ProductionStatusHistory2[];
	restriction: any;
	__typename: string;
}

export interface CurrentProductionStage2 {
	id: string;
	text: string;
	__typename: string;
}

export interface ProductionStatusHistory2 {
	status: Status2;
	__typename: string;
}

export interface Status2 {
	id: string;
	text: string;
	__typename: string;
}

export interface PrimaryImage2 {
	id: string;
	__typename: string;
}

export interface ImageUploadLink {
	url: string;
	__typename: string;
}

export interface TitleType2 {
	id: string;
	canHaveEpisodes: boolean;
	__typename: string;
}

export interface Cast {
	edges: Edge9[];
	__typename: string;
}

export interface Edge9 {
	node: Node9;
	__typename: string;
}

export interface Node9 {
	name: Name6;
	attributes?: Attribute[];
	category: Category3;
	characters: Character[];
	episodeCredits: EpisodeCredits;
	__typename: string;
}

export interface Name6 {
	id: string;
	nameText: NameText4;
	primaryImage?: PrimaryImage3;
	__typename: string;
}

export interface NameText4 {
	text: string;
	__typename: string;
}

export interface PrimaryImage3 {
	url: string;
	width: number;
	height: number;
	__typename: string;
}

export interface Attribute {
	text: string;
	__typename: string;
}

export interface Category3 {
	id: string;
	__typename: string;
}

export interface Character {
	name: string;
	__typename: string;
}

export interface EpisodeCredits {
	total: number;
	yearRange: any;
	__typename: string;
}

export interface Director2 {
	totalCredits: number;
	category: Category4;
	credits: Credit3[];
	__typename: string;
}

export interface Category4 {
	text: string;
	__typename: string;
}

export interface Credit3 {
	name: Name7;
	attributes: any;
	__typename: string;
}

export interface Name7 {
	id: string;
	nameText: NameText5;
	__typename: string;
}

export interface NameText5 {
	text: string;
	__typename: string;
}

export interface Writer {
	totalCredits: number;
	category: Category5;
	credits: Credit4[];
	__typename: string;
}

export interface Category5 {
	text: string;
	__typename: string;
}

export interface Credit4 {
	name: Name8;
	attributes: any;
	__typename: string;
}

export interface Name8 {
	id: string;
	nameText: NameText6;
	__typename: string;
}

export interface NameText6 {
	text: string;
	__typename: string;
}

export interface MoreLikeThisTitles {
	edges: Edge10[];
	__typename: string;
}

export interface Edge10 {
	node: Node10;
	__typename: string;
}

export interface Node10 {
	id: string;
	titleText: TitleText3;
	titleType: TitleType3;
	originalTitleText: OriginalTitleText3;
	primaryImage: PrimaryImage4;
	releaseYear: ReleaseYear3;
	ratingsSummary: RatingsSummary3;
	runtime: Runtime4;
	certificate: Certificate2;
	canRate: CanRate2;
	titleGenres: TitleGenres2;
	canHaveEpisodes: boolean;
	__typename: string;
}

export interface TitleText3 {
	text: string;
	__typename: string;
}

export interface TitleType3 {
	id: string;
	text: string;
	canHaveEpisodes: boolean;
	displayableProperty: DisplayableProperty3;
	__typename: string;
}

export interface DisplayableProperty3 {
	value: Value3;
	__typename: string;
}

export interface Value3 {
	plainText: string;
	__typename: string;
}

export interface OriginalTitleText3 {
	text: string;
	__typename: string;
}

export interface PrimaryImage4 {
	id: string;
	width: number;
	height: number;
	url: string;
	caption: Caption3;
	__typename: string;
}

export interface Caption3 {
	plainText: string;
	__typename: string;
}

export interface ReleaseYear3 {
	year: number;
	endYear: any;
	__typename: string;
}

export interface RatingsSummary3 {
	aggregateRating: number;
	voteCount: number;
	__typename: string;
}

export interface Runtime4 {
	seconds: number;
	__typename: string;
}

export interface Certificate2 {
	rating: string;
	__typename: string;
}

export interface CanRate2 {
	isRatable: boolean;
	__typename: string;
}

export interface TitleGenres2 {
	genres: Genre4[];
	__typename: string;
}

export interface Genre4 {
	genre: Genre5;
	__typename: string;
}

export interface Genre5 {
	text: string;
	__typename: string;
}

export interface TriviaTotal2 {
	total: number;
	__typename: string;
}

export interface Trivia {
	edges: Edge11[];
	__typename: string;
}

export interface Edge11 {
	node: Node11;
	__typename: string;
}

export interface Node11 {
	text: Text3;
	trademark: any;
	relatedNames: any;
	__typename: string;
}

export interface Text3 {
	plaidHtml: string;
	__typename: string;
}

export interface GoofsTotal {
	total: number;
	__typename: string;
}

export interface Goofs {
	edges: Edge12[];
	__typename: string;
}

export interface Edge12 {
	node: Node12;
	__typename: string;
}

export interface Node12 {
	text: Text4;
	__typename: string;
}

export interface Text4 {
	plaidHtml: string;
	__typename: string;
}

export interface QuotesTotal {
	total: number;
	__typename: string;
}

export interface Quotes {
	edges: Edge13[];
	__typename: string;
}

export interface Edge13 {
	node: Node13;
	__typename: string;
}

export interface Node13 {
	lines: Line[];
	__typename: string;
}

export interface Line {
	characters: Character2[];
	text: string;
	stageDirection: any;
	__typename: string;
}

export interface Character2 {
	character: string;
	name: Name9;
	__typename: string;
}

export interface Name9 {
	id: string;
	__typename: string;
}

export interface CrazyCredits {
	edges: Edge14[];
	__typename: string;
}

export interface Edge14 {
	node: Node14;
	__typename: string;
}

export interface Node14 {
	text: Text5;
	__typename: string;
}

export interface Text5 {
	plaidHtml: string;
	__typename: string;
}

export interface AlternateVersions {
	total: number;
	edges: Edge15[];
	__typename: string;
}

export interface Edge15 {
	node: Node15;
	__typename: string;
}

export interface Node15 {
	text: Text6;
	__typename: string;
}

export interface Text6 {
	plaidHtml: string;
	__typename: string;
}

export interface Connections {
	edges: Edge16[];
	__typename: string;
}

export interface Edge16 {
	node: Node16;
	__typename: string;
}

export interface Node16 {
	associatedTitle: AssociatedTitle;
	category: Category6;
	__typename: string;
}

export interface AssociatedTitle {
	id: string;
	releaseYear: ReleaseYear4;
	titleText: TitleText4;
	originalTitleText: OriginalTitleText4;
	series: Series;
	__typename: string;
}

export interface ReleaseYear4 {
	year: number;
	__typename: string;
}

export interface TitleText4 {
	text: string;
	__typename: string;
}

export interface OriginalTitleText4 {
	text: string;
	__typename: string;
}

export interface Series {
	series: Series2;
	__typename: string;
}

export interface Series2 {
	titleText: TitleText5;
	originalTitleText: OriginalTitleText5;
	__typename: string;
}

export interface TitleText5 {
	text: string;
	__typename: string;
}

export interface OriginalTitleText5 {
	text: string;
	__typename: string;
}

export interface Category6 {
	text: string;
	__typename: string;
}

export interface Soundtrack {
	edges: Edge17[];
	__typename: string;
}

export interface Edge17 {
	node: Node17;
	__typename: string;
}

export interface Node17 {
	text: string;
	comments: Comment[];
	__typename: string;
}

export interface Comment {
	plaidHtml: string;
	__typename: string;
}

export interface TitleText6 {
	text: string;
	__typename: string;
}

export interface OriginalTitleText6 {
	text: string;
	__typename: string;
}

export interface ReleaseYear5 {
	year: number;
	__typename: string;
}

export interface Reviews2 {
	total: number;
	__typename: string;
}

export interface FeaturedReviews2 {
	edges: Edge18[];
	__typename: string;
}

export interface Edge18 {
	node: Node18;
	__typename: string;
}

export interface Node18 {
	id: string;
	author: Author3;
	summary: Summary2;
	text: Text7;
	authorRating: number;
	submissionDate: string;
	helpfulness: Helpfulness;
	__typename: string;
}

export interface Author3 {
	nickName: string;
	userId: string;
	__typename: string;
}

export interface Summary2 {
	originalText: string;
	__typename: string;
}

export interface Text7 {
	originalText: OriginalText2;
	__typename: string;
}

export interface OriginalText2 {
	plaidHtml: string;
	__typename: string;
}

export interface Helpfulness {
	upVotes: number;
	downVotes: number;
	__typename: string;
}

export interface CanRate3 {
	isRatable: boolean;
	__typename: string;
}

export interface IframeAddReviewLink {
	url: string;
	__typename: string;
}

export interface TopQuestions {
	total: number;
	edges: Edge19[];
	__typename: string;
}

export interface Edge19 {
	node: Node19;
	__typename: string;
}

export interface Node19 {
	attributeId: string;
	question: Question;
	__typename: string;
}

export interface Question {
	plainText: string;
	__typename: string;
}

export interface Faqs {
	total: number;
	edges: Edge20[];
	__typename: string;
}

export interface Edge20 {
	node: Node20;
	__typename: string;
}

export interface Node20 {
	id: string;
	question: Question2;
	__typename: string;
}

export interface Question2 {
	plainText: string;
	__typename: string;
}

export interface ReleaseDate2 {
	day: number;
	month: number;
	year: number;
	country: Country2;
	__typename: string;
}

export interface Country2 {
	id: string;
	text: string;
	__typename: string;
}

export interface CountriesOfOrigin2 {
	countries: Country3[];
	__typename: string;
}

export interface Country3 {
	id: string;
	text: string;
	__typename: string;
}

export interface DetailsExternalLinks {
	edges: Edge21[];
	total: number;
	__typename: string;
}

export interface Edge21 {
	node: Node21;
	__typename: string;
}

export interface Node21 {
	url: string;
	label: string;
	externalLinkRegion: any;
	__typename: string;
}

export interface SpokenLanguages {
	spokenLanguages: SpokenLanguage[];
	__typename: string;
}

export interface SpokenLanguage {
	id: string;
	text: string;
	__typename: string;
}

export interface Akas {
	edges: Edge22[];
	__typename: string;
}

export interface Edge22 {
	node: Node22;
	__typename: string;
}

export interface Node22 {
	text: string;
	__typename: string;
}

export interface FilmingLocations {
	edges: Edge23[];
	total: number;
	__typename: string;
}

export interface Edge23 {
	node: Node23;
	__typename: string;
}

export interface Node23 {
	text: string;
	location: string;
	attributes: Attribute2[];
	__typename: string;
}

export interface Attribute2 {
	text: string;
	__typename: string;
}

export interface Production2 {
	edges: Edge24[];
	__typename: string;
}

export interface Edge24 {
	node: Node24;
	__typename: string;
}

export interface Node24 {
	company: Company2;
	__typename: string;
}

export interface Company2 {
	id: string;
	companyText: CompanyText2;
	__typename: string;
}

export interface CompanyText2 {
	text: string;
	__typename: string;
}

export interface Companies {
	total: number;
	__typename: string;
}

export interface ProductionBudget {
	budget: Budget;
	__typename: string;
}

export interface Budget {
	amount: number;
	currency: string;
	__typename: string;
}

export interface LifetimeGross {
	total: Total;
	__typename: string;
}

export interface Total {
	amount: number;
	currency: string;
	__typename: string;
}

export interface OpeningWeekendGross {
	gross: Gross;
	weekendEndDate: string;
	__typename: string;
}

export interface Gross {
	total: Total2;
	__typename: string;
}

export interface Total2 {
	amount: number;
	currency: string;
	__typename: string;
}

export interface WorldwideGross {
	total: Total3;
	__typename: string;
}

export interface Total3 {
	amount: number;
	currency: string;
	__typename: string;
}

export interface TechnicalSpecifications {
	soundMixes: SoundMixes;
	aspectRatios: AspectRatios;
	colorations: Colorations;
	__typename: string;
}

export interface SoundMixes {
	items: Item[];
	__typename: string;
}

export interface Item {
	id: string;
	text: string;
	attributes: any[];
	__typename: string;
}

export interface AspectRatios {
	items: any[];
	__typename: string;
}

export interface Colorations {
	items: Item2[];
	__typename: string;
}

export interface Item2 {
	conceptId: string;
	text: string;
	attributes: any[];
	__typename: string;
}

export interface Runtime5 {
	seconds: number;
	__typename: string;
}

export interface ContributionQuestions {
	contributionLink: ContributionLink;
	edges: any[];
	__typename: string;
}

export interface ContributionLink {
	url: string;
	__typename: string;
}

export interface Fake {
	"#TITLE": string;
	"#YEAR": number;
	"#IMDB_ID": string;
	"#RANK": number;
	"#ACTORS": string;
	"#AKA": string;
	"#IMDB_URL": string;
	"#IMDB_IV": string;
	"#IMG_POSTER": string;
	photo_width: number;
	photo_height: number;
}

export interface StoryLine {
	id: string;
	summaries: Summaries;
	outlines: Outlines;
	synopses: Synopses;
	storylineKeywords: StorylineKeywords;
	taglines: Taglines;
	genres: Genres2;
	certificate: Certificate3;
	parentsGuide: ParentsGuide;
	__typename: string;
}

export interface Summaries {
	edges: Edge25[];
	__typename: string;
}

export interface Edge25 {
	node: Node25;
	__typename: string;
}

export interface Node25 {
	plotText: PlotText2;
	experimental_translatedPlotText: any;
	author: string;
	__typename: string;
}

export interface PlotText2 {
	plaidHtml: string;
	__typename: string;
}

export interface Outlines {
	edges: Edge26[];
	__typename: string;
}

export interface Edge26 {
	node: Node26;
	__typename: string;
}

export interface Node26 {
	plotText: PlotText3;
	experimental_translatedPlotText: any;
	__typename: string;
}

export interface PlotText3 {
	plaidHtml: string;
	__typename: string;
}

export interface Synopses {
	edges: Edge27[];
	__typename: string;
}

export interface Edge27 {
	node: Node27;
	__typename: string;
}

export interface Node27 {
	plotText: PlotText4;
	experimental_translatedPlotText: any;
	__typename: string;
}

export interface PlotText4 {
	plaidHtml: string;
	__typename: string;
}

export interface StorylineKeywords {
	edges: Edge28[];
	total: number;
	__typename: string;
}

export interface Edge28 {
	node: Node28;
	__typename: string;
}

export interface Node28 {
	legacyId: string;
	text: string;
	__typename: string;
}

export interface Taglines {
	edges: Edge29[];
	total: number;
	__typename: string;
}

export interface Edge29 {
	node: Node29;
	__typename: string;
}

export interface Node29 {
	text: string;
	experimental_translatedText: any;
	__typename: string;
}

export interface Genres2 {
	genres: Genre6[];
	__typename: string;
}

export interface Genre6 {
	id: string;
	text: string;
	__typename: string;
}

export interface Certificate3 {
	rating: string;
	ratingReason: string;
	ratingsBody: RatingsBody;
	__typename: string;
}

export interface RatingsBody {
	id: string;
	__typename: string;
}

export interface ParentsGuide {
	guideItems: GuideItems;
	__typename: string;
}

export interface GuideItems {
	total: number;
	__typename: string;
}
