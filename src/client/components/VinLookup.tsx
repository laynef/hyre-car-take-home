import * as React from 'react';
import { useParams } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { Query } from 'react-apollo';
import LoadingSpinner from 'react-md-spinner';
import Gallery from './Gallery';
import { get } from 'lodash';


const IMAGES_QUERY = loader('../queries/images.graphql');
const VIN_SPEC_QUERY = loader('../queries/vinSpecs.graphql');

interface QueryChildren {
    loading: boolean;
    error?: any;
    data: any;
}

interface Params {
    vin: string;
}

const VinLookup: React.FC = (props: any) => {
  const { vin }: Params = useParams();
  return (
    <div className="w-100 h-100 bg-light">
        <h1 className="text-center font-weight-light">Vin Number</h1>
        <div className="d-flex flex-column align-items-center w-100">
            <Query query={VIN_SPEC_QUERY} variables={{ vin }}>
                {(vinData: QueryChildren) => {
                    if (vinData.loading) return <LoadingSpinner />
                    if (vinData.error) return null;

                    const { year, make, model } = get(vinData, 'data.vinSpec.attributes', {});
                    if (!year || !make || !model) return null;

                    return (
                        <Query query={IMAGES_QUERY} variables={{ year, make, model }}>
                            {(imageData: QueryChildren) => {
                                if (imageData.loading) return <LoadingSpinner />;
                                if (imageData.error) return null;

                                return (
                                    <React.Fragment>
                                        <Gallery images={get(imageData, 'data.images.images', [])} />
                                    </React.Fragment>
                                );
                            }}
                        </Query>
                    )
                }}
            </Query>
        </div>
    </div>
  );
}

export default VinLookup;