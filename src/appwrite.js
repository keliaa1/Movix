import {Client, Databases,ID, Query} from 'appwrite'
const DatabaseId = import.meta.env.VITE_APPWRITE_DB_ID;
const CollectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ProjectID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(ProjectID)

const database  = new Databases(client);

export const UpdateSearchCount = async(searchTerm, movie)=>{
    try{
        const result = await database.listDocuments(DatabaseId, CollectionId, [Query.equal('searchTerm', searchTerm),]);

        if (result.documents.length>0){
            const doc = result.documents[0];
            await database.updateDocument(DatabaseId, CollectionId, doc.$id, {
                count:doc.count +1,
            })
        }else{
            await database.createDocument(DatabaseId, CollectionId, ID.unique(), {
                searchTerm,
                count:1,
                movie_id:movie.id,
                poster_url:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            });
        }
    }catch(error){
        console.error(error);
    }
}
export const getTrendingMovies = async()=>{
    try{
        const result = await database.listDocuments(DatabaseId, CollectionId, [
            Query.limit(5),
            Query.orderDesc('count'),
        ])
        return result.documents;
    }catch(error){
        console.error(error);
    }
}