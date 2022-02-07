import styled from "styled-components";

export const EntryItem = ({nestedObj}) => {
    const renderItem = (obj) => {
        return Object.entries(obj).map(([key, value]) =>  {
            return (
                <Entry>   
                    <Key>
                        {`${key}:`}
                    </Key>
                    <Value> 
                    {
                        typeof value === 'string' ? 
                        `${value}`
                        :
                        renderItem(value)
                    }
                    </Value> 
                </Entry> 
            );
        });
    };

    return (
        <Container>
            {renderItem(nestedObj)}
        </Container>
    );
};

export default EntryItem;

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    padding-left: 10px;
    // background-color: #DAF7A6;
`;

const Entry = styled.div `
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: flex-start;
    padding-left: 10px;
    // background-color: #30FFAC;
`;

const Key = styled.div `
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: flex-start;
    padding: 10px; 
    background-color: #77FF30;
`;

const Value = styled.div `
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    padding: 10px;
    background-color: #7A37FB;
`;

