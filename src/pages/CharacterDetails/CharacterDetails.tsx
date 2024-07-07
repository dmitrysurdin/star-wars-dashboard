import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { CharacterDetails as CharacterDetailsType } from 'types';
import { Loader } from 'components/Loader/Loader';
import { useCharacterDetails } from './hooks/useCharacterDetails';
import styles from './CharacterDetails.module.scss';

export const CharacterDetails: FC = () => {
  const { data: character, loading, error, setCharacterDetails } = useCharacterDetails();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedCharacter, setEditedCharacter] = useState<CharacterDetailsType | null>(null);

  useEffect(() => {
    if (character) {
      setEditedCharacter(character);
    }
  }, [character]);

  if (error) {
    return <p>{error}</p>;
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditedCharacter((prev) =>
      prev ? ({ ...prev, [name]: value } as CharacterDetailsType) : prev
    );
  };

  const handleSave = () => {
    setCharacterDetails(editedCharacter);
    setIsEditing(false);
  };

  return (
    <>
      <Typography variant="h4" component="h3" className={styles.title}>
        Character Details
      </Typography>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={4} className={styles.inputWrapper}>
            {(Object.keys(character!) as Array<keyof CharacterDetailsType>).map(
              (characterParam) => (
                <Grid item xs={12} sm={6} md={4} key={characterParam}>
                  <TextField
                    label={characterParam.replace('_', ' ')}
                    name={characterParam}
                    value={
                      isEditing
                        ? editedCharacter![characterParam] ?? ''
                        : character![characterParam] ?? ''
                    }
                    onChange={handleChange}
                    fullWidth
                    disabled={!isEditing}
                    variant={isEditing ? 'outlined' : 'standard'}
                  />
                </Grid>
              )
            )}
          </Grid>
          {isEditing ? (
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          )}
        </>
      )}
    </>
  );
};
