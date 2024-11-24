import * as env from 'env-var';


export default {
    manateeDb: {
        databaseName: env.get('SUPABASE_MANATEE_DB_NAME').asString(),
        baseUrl: env.get('SUPABASE_MANATEE_URL').asString(),
        userName: env.get('SUPABASE_MANATEE_USER_NAME').asString(),
        password: env.get('SUPABASE_MANATEE_PASSWORD').asString(),
        port: env.get('SUPABASE_MANATEE_PORT').asInt()
    }
}