export type Article = {
    id: Number;
    dateCreated: Date;
    datePublished: Date;
    slug: string;
    headline: string;
    additionalHeadline: string;
    meta:  {
        articleBullets: string[];
        exclamation: string;
        actualPublishTime: Date;
        commentCount: Number;
    }
    articleLead: {
        type: string;
        html: string;
        wordCount: Number;
    }[];

    thumbnail: {
        sources: {
            square: {
                xxsmall: string;
                xsmall: string;
                medium: string;
                large: string;
            },
            portrait: {
                small: string;
                medium: string;
                large: string;
                butterfly: string;
            },
            landscape: {
                xxsmall: string;
                xsmall: string;
                small: string;
                medium: string;
                large: string;
            }
        }
        title: {
            et: string;
        }
    }
}

export const useUpdateArticles = async () => {
    const url = 'https://services.postimees.ee/rest/v1/sections/81/editorsChoice/articles?limit=5';
    const key = 'articles';

    const { error } = await useFetch<Article[]>(url, { key });

    if ( error.value ) {
        console.log(error);
    }
}