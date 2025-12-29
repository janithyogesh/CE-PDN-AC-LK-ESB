import * as dmUtils from "./dm-utils";
declare var DM_PROPERTIES: any;

/*
 * title : "root",
 * inputType : "JSON",
 */
interface Publication {
    title: string;
    venue: string;
    year: string;
    abstract: string;
    authors: string[];
    author_info: {
        name: string;
        profile: string;
        type: string;
        id: string;
        email: string;
        profile_image: string;
        profile_url: string;
    }[];
    doi: string;
    is_dept_affiliated: boolean;
    preprint: string;
    pdf: string;
    presentation: string;
    project: string;
    codebase: string;
    researchgroups: string[];
    funding: string;
    tags: string[];
    api_url: string;
    edit_url: string;
}

interface Root {
    "Computer Vision": Publication[];
    "Accelerated and High-Performance Computing (FPGA / GPU)": Publication[];
    "Computational BioEngineering": Publication[];
    "ESCAL_ Computer Systems (Embedded Systems / Robotics )": Publication[];
    "Machine Learning and Data Mining": Publication[];
    "Nextgen Networks": Publication[];
    "Secure and Reliable Computing (Formal Verification / Cryptography / Blockchain)": Publication[];
    "Smart and Intelligent Systems (IoT / AI / Wearable Computing)": Publication[];
}

/*
 * title : "root",
 * outputType : "JSON",
 */
interface OutputRoot {
    response: string;
    metadata: {
        count: number;
    };
    data: Publication[];
}

/**
 * functionName : map_S_root_S_root
 * inputVariable : input
 */
export function mapFunction(input: Root): OutputRoot {
    const cvPublications = input["Computer Vision"] ?? [];

    return {
        response: "success",
        data: cvPublications,
        metadata: {
            count: mapPublicationCount(cvPublications)
        }
    };
}

/* ---------- Helpers ---------- */

function mapPublicationCount(input: Publication[]): number {
    return input.length;
}
