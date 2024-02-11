import { Card, Text, Button, Group, SimpleGrid } from '@mantine/core';

export function Pokemon() {
    return (
        <Card shadow="md" padding="lg" radius="lg" withBorder w={900}>
            <Text fw={500} ta={'center'} size='xl' mt={'xs'} mb={'md'}>Lista</Text>

            <Card.Section>
                <SimpleGrid cols={2}>
                    <Card shadow="md" radius="lg" withBorder style={{ marginLeft: 20 }}>1</Card>
                    <Card shadow="md" radius="lg" withBorder style={{ marginRight: 20 }}>2</Card>
                </SimpleGrid>
            </Card.Section>

            <Group justify='space-evenly' mt={'xl'} mb={'lg'} >
                <Button variant='light' radius="md">
                    Aggiungi
                </Button>
                <Button color='red' variant='light' radius="md">
                    Rimuovi
                </Button>
            </Group>
        </Card>
    );
}