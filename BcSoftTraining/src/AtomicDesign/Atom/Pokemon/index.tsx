import { Card, Text, Button, Group, SimpleGrid } from '@mantine/core';

export function Pokemon() {
    return (
        <Card shadow="md" padding="lg" radius="lg" withBorder w={900}>
            <Text fw={500} ta={'center'} size='xl' mt={'xs'} mb={'md'}>Lista Pokemon</Text>

            <Group justify='space-evenly'>
                <Button variant='light' radius="md">
                    Aggiungi
                </Button>
                <Button color='red' variant='light' radius="md">
                    Rimuovi
                </Button>
            </Group>

            <Card.Section mt={'xl'} mb={'lg'} >
                <SimpleGrid cols={2}>
                    <Card shadow="md" radius="lg" withBorder style={{ marginLeft: 20 }}>Aggiungere Pokemon</Card>
                    <Card shadow="md" radius="lg" withBorder style={{ marginRight: 20 }}>Rimuovere Pokemon</Card>
                </SimpleGrid>
            </Card.Section>

        </Card>
    );
}