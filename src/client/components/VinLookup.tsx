import * as React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { Query } from 'react-apollo';
import LoadingSpinner from 'react-md-spinner';
import Gallery from './Gallery';
import ColorPicker from './ColorPicker';
import Details from './Details';
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

interface Color {
    name: string;
    category: string;
}

const VinLookup: React.FC = () => {
  const { vin }: Params = useParams();
  const history = useHistory();

  return (
    <div className="w-100 h-100 bg-light">
        <h1 className="text-center font-weight-light">Vin Number</h1>
        <div className="d-flex flex-column align-items-center w-100">
            <Query query={VIN_SPEC_QUERY} variables={{ vin }}>
                {(vinData: QueryChildren) => {
                    if (vinData.loading) return <LoadingSpinner className="mt-2" />
                    if (vinData.error) history.push('/?error=true');

                    const attributes = get(vinData, 'data.vinSpec.attributes', {});
                    const colors = get(vinData, 'data.vinSpec.colors', []);

                    const exteriorColors = colors.filter((e: Color) => e.category === "Exterior");
                    const interiorColors = colors.filter((e: Color) => e.category === "Interior");

                    const { year, make, model } = attributes;
                    if (!year || !make || !model) history.push('/?error=true');

                    return (
                        <Query query={IMAGES_QUERY} variables={{ year, make, model }}>
                            {(imageData: QueryChildren) => {
                                if (imageData.loading) return <LoadingSpinner className="mt-2" />;
                                if (imageData.error) history.push('/?error=true');

                                return (
                                    <React.Fragment>
                                        <Gallery 
                                            query={get(imageData, 'data.images.query', {})} 
                                            images={get(imageData, 'data.images.images', [])} 
                                        />
                                        <ColorPicker title="Exterior Colors" colors={exteriorColors} />
                                        <ColorPicker title="Interior Colors" colors={interiorColors} />
                                        <Details attributes={attributes} />
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