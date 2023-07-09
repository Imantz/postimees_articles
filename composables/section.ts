export interface SectionData {
    name: string;
    description: string;
    keywords: string[];
    slug: string;
    domain: string;
    meta: {
        highlightColor: string;
        social: {
            facebook: string;
            twitter: string;
        };
        brandLogoUrl: string;
        name: string;
    };
    theme: string;
    color: string;
    color2: string;
    color3: string;
    color4: string;
    colorDarkMode: string;
}

export const useUpdateSectionData = async () => {
    const url = 'https://services.postimees.ee/rest/v1/sections/81';
    const key = 'section';

    const { error } = await useFetch<SectionData>(url, { key });

    if ( error.value ) {
        console.log(error);
    }
}