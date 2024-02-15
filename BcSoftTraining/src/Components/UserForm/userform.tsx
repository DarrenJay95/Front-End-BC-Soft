import { userFormSchema } from './userform.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Checkbox, Fieldset, Group, Space, TextInput, Title } from '@mantine/core'


function UserForm() {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors }
    } = useForm<z.infer<typeof userFormSchema>>({ resolver: zodResolver(userFormSchema) });

    console.log('Errors:', errors)
    // console.log('Watch:', watch())

    const onSubmit = (data: z.infer<typeof userFormSchema>) => {
        console.log('Data:', data)
    }

    return (
        <>
            <Title order={2} fw={700} c={'#67AADF'}>User Form Schema</Title>
            <Space h={'xl'} />
            <form style={{ width: '100%', marginBottom: 100 }} onSubmit={handleSubmit(onSubmit)}>
                <Fieldset p={50} w={500}>
                    <TextInput error={errors.name?.message} label={'Nome'} ta={'left'} placeholder='Inserisci il tuo nome' {...register('name')} />
                    <Space h={'lg'} />
                    <TextInput error={errors.email?.message} label={'Email'} ta={'left'} placeholder='Inserisci il tuo email' {...register('email')} />
                    <Space h={'lg'} />
                    <TextInput error={errors.password?.message} label={'Password'} ta={'left'} placeholder='Inserisci password' {...register('password')} />
                    <Space h={'lg'} />
                    <TextInput error={errors.confirm?.message} label={'Conferma Password'} ta={'left'} placeholder='Conferma password' {...register('confirm')} />
                    <Space h={'lg'} />
                    <Checkbox label={'register'} {...register('isActive')} />

                    <Group justify="flex-end" mt="md">
                        <Button type='submit'>
                            Invia
                        </Button>
                    </Group>
                </Fieldset>

            </form>
        </>
    )
}

export default UserForm;
